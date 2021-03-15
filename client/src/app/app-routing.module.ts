import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../app/views/landing-page/landing-page.component';
import { LoginPageComponent } from '../app/views/auth/login-page/login-page.component';
import { SignUpPageComponent } from './views/auth/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/sign-up',
    component: SignUpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
