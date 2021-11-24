import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from 'src/app/models/alert';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(private _router: Router, private _alertsService: AlertsService) { }

  ngOnInit(): void {
    // subscribe to new alert notifications
    this.alertSubscription = this._alertsService.onAlert(this.id)
    .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
            // filter out alerts without 'keepAfterRouteChange' flag
            this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

            // remove 'keepAfterRouteChange' flag on the rest
            this.alerts.forEach(x => delete x.keepAfterRouteChange);
            return;
        }

        // add alert to array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
            setTimeout(() => this.removeAlert(alert), 5000);
        }
      });

    // clear alerts on location change
    this.routeSubscription = this._router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this._alertsService.clear(this.id);
        }
    });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
        // fade out alert
        this.alerts.find(x => x === alert)!.fade = true;

        // remove alert after faded out
        setTimeout(() => {
            this.alerts = this.alerts.filter(x => x !== alert);
        }, 250);
    } else {
        // remove alert
        this.alerts = this.alerts.filter(x => x !== alert);
    }
}

cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
        [AlertType.Success]: 'alert-success',
        [AlertType.Error]: 'alert-danger',
        [AlertType.Info]: 'alert-info',
        [AlertType.Warning]: 'alert-warning',
        [AlertType.Default]: ''
    }

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
        classes.push('fade');
    }

    return classes.join(' ');
}

}
