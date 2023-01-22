import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, User } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser$ = new Subject<Customer>();

  constructor(private _http : HttpClient) {
  }

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
          reject(error.error)
        }
      )
    })
  }

  /**
   * Modifier le mot de passe d'un client
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  modifyPassword(oldPassword : string , newPassword : string){
    return new Promise<string>((resolve, reject) => {
      this._http.put(environment.api+'user/modifyPassword/',{oldPassword : oldPassword, newPassword : newPassword}).subscribe(
        (res : any)=>{
          resolve(res.message)
        },
        (error)=>{
          reject(error.error)
        }
      )
    })
  }

  /**
   * Modifier les informations personnelles d'un client
   * @param customer
   */
  modifyCustomerPersonalsInfo(customer : Customer){
    return new Promise<string>((resolve, reject) => {
      this._http.put(environment.api+'user/modifyMe/',{...customer}).subscribe(
        (res : any)=>{
          this.getCurrentCustomer()
          resolve(res.message)
        },
        (error)=>{
          reject(error.error)
        }
      )
    })
  }

  getCurrentCustomer(){
    return new Promise<Customer>((resolve, reject) => {
      this._http.get(environment.api+'user/getMe/').subscribe(
        (currentCustomer : any)=>{
          console.log(currentCustomer)
          this.currentUser$.next(currentCustomer)
          resolve(currentCustomer)
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
