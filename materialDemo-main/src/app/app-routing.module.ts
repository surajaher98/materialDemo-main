import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'forgot-password', component: ForgotPasswordComponent  },
  { path: 'signup', component: SignupComponent  }
  // {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
