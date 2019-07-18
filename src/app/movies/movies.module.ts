import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesHomeComponent } from './movies-home/movies-home.component';

import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from '../login-module/login.guard';
import { LoginComponentComponent } from '../login-module/login-component/login-component.component';

import { HomeComponent } from '../home-page/home/home.component';
import { MovieResolveService } from './movie-resolve.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'main',
    canActivate: [ LoginGuard ],
    component: MoviesHomeComponent
  },
  {

    path: 'search',
    component: MoviesHomeComponent
  },
  {

    path: 'detail/:id',
resolve:{

movie:MovieResolveService
},
    component: MovieDetailComponent

  },
  { path: '**', component: LoginComponentComponent }

]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [MoviesHomeComponent, MovieDetailComponent],
  providers: [
    MovieService,
    MovieResolveService
  ]
})
export class MoviesModule { }
