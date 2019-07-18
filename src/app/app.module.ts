import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModuleModule } from './login-module/login-module.module';
import { MoviesModule } from './movies/movies.module';
import { HomePageModule } from './home-page/home-page.module';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { LoginGuard } from './login-module/login.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModuleModule,
    MoviesModule,
    HomePageModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([])
    
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
