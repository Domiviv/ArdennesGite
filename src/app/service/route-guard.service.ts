import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router:Router, private authentication:AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authentication.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
