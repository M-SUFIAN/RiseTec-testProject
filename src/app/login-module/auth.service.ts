import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;
  submitted: boolean;
  login_button: boolean;
  registerForm: any;
  errormessage = "Does not match";
  isLoggedIn = false;
  constructor(private router: Router) { }

  login(userName: string, password: string) {
    this.submitted = true;
    this.login_button = false;
    if (userName === localStorage.getItem("email") && password === localStorage.getItem('password')) {
      this.isLoggedIn = true;
      return true;
    }
    else {
      return false;
      // alert(this.errormessage);
    }

  }

  logout(): void {
    this.currentUser = null;
  }
}
