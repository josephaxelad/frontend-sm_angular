import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, User } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser$ = new Subject<User>();

  constructor(private _http : HttpClient) { }

  /**
   * Inscrire un nouveau client
   * @param customer
   */
  signUp(customer : Customer){
    return new Promise((resolve, reject) => {
      this._http.post(environment.api+'user/signUp',customer).subscribe(
        (res : any)=>{
          resolve(res)
        },
        (error)=>{
          reject(error)
        }
      )
    })
  }

  getUser(id :string){
    return new Promise<User>((resolve, reject) => {
      this._http.get(environment.api+'user/getOne/'+id).subscribe(
        (user : any)=>{
          resolve(user)
        },
        (error)=>{
          reject(error)
        }
      )
    })
  }

  emitUser(){

  }
}
