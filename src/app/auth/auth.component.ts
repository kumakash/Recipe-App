import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private authService: AuthService, private route: Router) { }
  
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  OnSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  OnSubmit(authForm: NgForm) {
    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;
    
    if (this.isLoginMode) {
      authObs = this.authService.signin(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.route.navigate(['/recipes']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    authForm.reset();
  }

  OnhandleError() {
    this.error = null;
  }
}
