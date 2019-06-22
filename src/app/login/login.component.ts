import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  invalidLogin:boolean=false;
  
  constructor(private router:Router, private basicauthentication:BasicAuthenticationService){ }

  ngOnInit() {
  }

  handleBasicAuthLogin() {

    console.log("auth")

    this.basicauthentication.executeJWTAuthenticationService(this.username, this.password)

      .subscribe(

        data => {

          console.log(data)

          this.router.navigate(['welcome'])

          this.invalidLogin = false

        },

        error => {

          console.log(error)

          this.invalidLogin = true

        }

      )

  }

}