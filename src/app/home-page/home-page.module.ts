import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';


const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent],
  exports:[RouterModule]
})
export class HomePageModule { }
