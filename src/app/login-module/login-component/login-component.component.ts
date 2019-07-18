import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  pageTitle = ' Welcome to Cine-Y-Cine';
  registerForm: FormGroup;
  login_button = true;
  submitted = false;
  errorMessage = 'Your user name and password does not match in database';


  constructor(private formbuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    this.login_button = false;
    let loggedIn = this.authService.login(this.registerForm.value.email, this.registerForm.value.password);
    if (loggedIn) {
      this.router.navigate(['/main']);
      console.log('whyyyyyyyyyyyyyyyy')

    }
    else {
      alert(this.errorMessage);
    }

  }
  buttonRemove() {
    if(this.login_button===false)
    {
      this.login_button=true;
      console.log("Button removed1");

    }
    else{
      console.log("Button removed");
      this.login_button=false;
    }
  }

}
