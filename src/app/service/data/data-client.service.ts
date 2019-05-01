import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';



  export class Student{
    constructor() {}
  }


@Injectable({
  providedIn: 'root'
})

export class DataClientService {

  constructor(private http:HttpClient) { }

  executeDataStudentService(){
     //Création headers
     let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
     let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
     return this.http.get(`${API_URL}/client`,{headers});
  }
    //Create header
  createBasicAuthenticationHttpHeader() {
     let username = 'vivien'
     let password = 'yolo'
     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
     return basicAuthHeaderString;
  }
}