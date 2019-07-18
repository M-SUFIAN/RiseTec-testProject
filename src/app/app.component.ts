import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'CineYCine';
  login_button = false;
  

  ngOnInit() {
    localStorage.setItem("email", "admin@admin.com");
    localStorage.setItem("password", "12345678");
  }
  

 
    // this.login_button = !this.login_button;
    // console.log("Button removed");
    // return this.login_button; 
  }

