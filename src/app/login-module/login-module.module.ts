import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: 'login',
      component: LoginComponentComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
];
@NgModule({
  imports: [
   CommonModule,
   ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponentComponent
  ]
})
export class LoginModuleModule { }
