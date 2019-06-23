import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './service/http-intercepter-basic-auth-service.service.spec';
import { SignupComponent } from './signup/signup.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { GestionClientsComponent } from './gestion-clients/gestion-clients.component';
import { GestionGitesComponent } from './gestion-gites/gestion-gites.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    SignupComponent,
    MustMatchDirective,
    GestionClientsComponent,
    GestionGitesComponent,
    LogoutComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpIntercepterBasicAuthService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
