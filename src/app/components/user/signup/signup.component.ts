import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AlertsService } from 'src/app/services/alerts.service';
import { UserService } from 'src/app/services/user.service';

// custom validator to check that two fields match

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl?.errors.matching) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  customer!: Customer;
  submitted: boolean = false;

  constructor(private _fb : FormBuilder,private _userService : UserService,private _alertsService : AlertsService,private _router : Router) { }

  ngOnInit(): void {
    /** Initialisation du formulaire d'inscription */
    this.signUpForm = this._fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      reEmail: ['',[Validators.required]],
      sex: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(40)]],
      rePassword: ['',Validators.required],
      acceptTerms: [false,Validators.requiredTrue]
    }, {
      validators: [Validation.match('email', 'reEmail'),Validation.match('password', 'rePassword')]
    })
  }

    /**
   * S'inscrire
   */
     signUp() : void{
      this.submitted = true;

      // Vérifier la validité du formulaire
      if (this.signUpForm.valid) {

        //Vérifier si les mots de passes sont identiques

        const sex = this.signUpForm.get('sex')?.value;
        const firstname = this.signUpForm.get('firstname')?.value;
        const lastname = this.signUpForm.get('lastname')?.value;
        const email = this.signUpForm.get('email')?.value;
        const password = this.signUpForm.get('password')?.value;


        const customer = {
          user : {
            sex : sex,
            firstname: firstname,
            lastname : lastname,
            email : email,
            creationDate : new Date(),
          },
          password : password,
          isDeleted : false
          };

          console.log(customer)

        this._userService.signUp(customer)
        .then((res : any)=>{
          this.submitted = false;
          this._alertsService.success(res.message,
          {
            autoClose: true,
            keepAfterRouteChange: true,
          }
          )
          this._router.navigate(["/"])
        })
        .catch((error)=>{
          console.log(error)
          this.submitted = false;
          this._alertsService.error("Une erreur est survenue lors de l'inscription, verifiez si l'adresse email "+customer.user.email+" n'existe pas déjà! ",
          {
            autoClose: true,
            keepAfterRouteChange: false,
          })
        })
      }
    }

}
