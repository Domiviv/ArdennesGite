import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private basicauthentication:BasicAuthenticationService) { }

  ngOnInit() {
    this.basicauthentication.logout();
    this.router.navigate(['welcome'])
  }

}
