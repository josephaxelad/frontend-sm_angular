import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  token!: string;
  id!: string;

  constructor(private _http : HttpClient,private _userService : UserService) {
    this.verifyAuth();
  }


  /**
   *
   * @param credentials
   */
   login(credentials :{email : string,password :string}){
    return new Promise<void>((resolve, reject) => {
      this._http.post(environment.api+'user/login', {email : credentials.email , password : credentials.password})
      .subscribe(
        (authData : any)=>{
          this.token = authData.token;
          this.id = authData.id;
          if (typeof(localStorage) !== "undefined") {
            localStorage.setItem('token', JSON.stringify(this.token));
            localStorage.setItem('id' ,  JSON.stringify(this.id));
          }
          this.isAuth$.next(authData.id);
          resolve();
        },
        (error : any) => {
          reject(error.error);
        },

      );
    });
  }

  //Vérifier si il y'a un client connecté
  verifyAuth(){
    if (typeof(localStorage) !== "undefined") {
      const token = JSON.parse(localStorage.getItem('token')!);
      if (token) {
        this.isAuth$.next(true);
      }
      else {
        this.logout()
      }
    }else{
      this.logout();
    }
  }

  //Logout
  logout(){
    this.isAuth$.next(false);
    this.token = "";
    if (typeof(localStorage) !== "undefined") {
      localStorage.removeItem('token');
    }

  }
}
