import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { GestionClientsComponent } from './gestion-clients/gestion-clients.component';
import { GestionGitesComponent } from './gestion-gites/gestion-gites.component';
import { LogoutComponent } from './logout/logout.component';




const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'logout', component : LogoutComponent},
  {path : 'welcome', component : WelcomeComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'gestion-clients', component : GestionClientsComponent},
  {path : 'gestion-gites', component : GestionGitesComponent},
  {path : '**', component : ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }