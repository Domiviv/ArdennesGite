import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='Username';
  password='';
  invalidLogin:boolean=false;
  
  constructor(private router:Router, private authentication:AuthenticationService, private basicauthentication:BasicAuthenticationService){ }

  ngOnInit() {
  }
  handleLogin(){
    if(this.authentication.authenticate(this.username,this.password)){
      this.router.navigate(['welcome']);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }

  handleBasicAuthLogin() {

    console.log("auth")

    this.basicauthentication.executeAuthenticationService(this.username, this.password)

      .subscribe(

        data => {

          console.log(data)

          this.router.navigate(['welcome', this.username])

          this.invalidLogin = false

        },

        error => {

          console.log(error)

          this.invalidLogin = true

        }

      )

  }

}