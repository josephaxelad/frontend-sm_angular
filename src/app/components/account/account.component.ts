import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public isAuth: boolean = false;
  private isAuthSub!: Subscription;

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    //Vérifier si un utilisateur est connecté
    this.isAuthSub = this._authService.isAuth$.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );
  }

}
