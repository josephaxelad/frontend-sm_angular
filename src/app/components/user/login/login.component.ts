import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AlertsService } from 'src/app/services/alerts.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted: boolean = false;
  errorMessage! : string;

  constructor(private _fb : FormBuilder,private _authService : AuthService,private _alertsService : AlertsService,private _router : Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /** Initialisation du formulaire de connexion */
    this.loginForm = this._fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
    })
  }

  /**Se coonecter */
  login(){
    this.submitted = true;

    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      const credentials = {
        email : email,
        password : password
      }

      this._authService.login(credentials)
      .then(()=>{
        this._activatedRoute.queryParams
        .subscribe(params => {
          if (params.order=='true') {
            this._router.navigate(['/inscription']);
          } else {
            this._router.navigate(['/']);
          }
        }
      );
      })
      .catch((error)=>{
        console.log(error);
        this.errorMessage = error.error;
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      })
    }
  }

}
