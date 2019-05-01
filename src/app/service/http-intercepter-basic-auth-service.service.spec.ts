import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  
  constructor(private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    //let username = 'user1'
    //let password = 'toto'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    let reqauth
    console.log(username)
    console.log(req)
    
    if(basicAuthHeaderString && username) { 
      console.log(basicAuthHeaderString)
      reqauth = req.clone({
           setHeaders : {
               "Authorization" : basicAuthHeaderString,
               "Content-Type" : "application/json"
             }
           })
      console.log('reqauth')    
      return next.handle(reqauth);
    }

    console.log('req')   
    return next.handle(req);
  }
}
