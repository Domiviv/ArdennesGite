import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {
  constructor (private http: HttpClient) { }
  // executeAuthenticationService(username, password) {

  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   let headers = new HttpHeaders({

  //     Authorization: basicAuthHeaderString
  //   })

  //   return this.http.get<AuthenticationBean>(

  //     `${ API_URL }/basicauth`, { headers }).pipe(
  //       map(
  //         data => {
  //           sessionStorage.setItem('authenticaterUser', username);
  //           sessionStorage.setItem('token', basicAuthHeaderString);
  //           return data;
  //         }
  //       )
  //     );
  // }
  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            console.log(data);
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }




  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }




  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }
}

export class AuthenticationBean {
  constructor (public message: string) { }
} 