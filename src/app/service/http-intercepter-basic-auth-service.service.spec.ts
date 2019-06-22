import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  
  constructor(private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    let reqauth
    
    if(basicAuthHeaderString && username) { 
      reqauth = req.clone({
           setHeaders : {
               "Authorization" : basicAuthHeaderString,
               "Content-Type" : "application/json"
             }
           })
      return next.handle(reqauth);
    }

    return next.handle(req);
  }
}
