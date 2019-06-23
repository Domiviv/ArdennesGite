import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router, private basicauthentication:BasicAuthenticationService) { }

  ngOnInit() {
  }
  logout(){
    this.basicauthentication.logout();
    this.router.navigate(['welcome']);
  }

}
