import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';



  export class Gite{
    constructor() {}
  }


@Injectable({
  providedIn: 'root'
})

export class DataGiteService {

  constructor(private http:HttpClient) { }

  executeDataGiteService(){
     return this.http.get(`${API_URL}/gite`);
  }
}