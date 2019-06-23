import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Proprietaire } from './data-proprietaire.service';



 export class Gite{
  idgite: number;
  libelle: string;
  idproprietaire: Proprietaire;
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
  deleteGite(idgite: number){
    return this.http.delete(`${API_URL}/gites/`+idgite);
  }
}