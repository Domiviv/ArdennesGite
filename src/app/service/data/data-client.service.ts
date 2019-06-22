import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Observable } from 'rxjs';



  export class Client{
    idclient: number;
    prenom: string;
    nom: string;
    email: string;
    tel: string;
    cp: string;
    mdp: string;
    blacklist: number;
    constructor() {}
  }


@Injectable({
  providedIn: 'root'
})

export class DataClientService {

  constructor(private http:HttpClient) { }

  executeDataClientService(){
     //Création headers
     return this.http.get(`${API_URL}/client`);
  }
  addClient(client: any): Observable<any>{
    return this.http.post(`${API_URL}/client`,client);
  }
  deleteClient(idclient: number){
    return this.http.delete(`${API_URL}/clients/`+idclient);
  }
}