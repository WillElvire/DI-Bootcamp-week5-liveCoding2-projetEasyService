import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';

const routes: Routes = [
  {
    path :'home',
    component : HomeComponent
  },
  {
    path : 'auth/login',
    component : LoginComponent
  },
  {
    path: 'auth/register',
    component : RegisterComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
