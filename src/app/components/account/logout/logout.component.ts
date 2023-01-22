import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/models/alert';
import { AlertsService } from 'src/app/services/alerts.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService : AuthService,private _alertService : AlertsService) { }

  ngOnInit(): void {
  }

  logout(){
    this._authService.logout()
    this._alertService.info("Vous êtes déconnecté !",{keepAfterRouteChange : true,autoClose : true})
  }

}
