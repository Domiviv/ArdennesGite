import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username,password){
    if(username==="toto" && password==="toto"){
      sessionStorage.setItem('authenticateduser',username);
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('autenticateduser');
    return !(user===null);
  }
}
