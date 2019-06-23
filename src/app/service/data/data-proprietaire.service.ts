import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proprietaire{
  idproprietaire: number;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  daten: Date;
  adresse1: string;
  adresse2: string;
  tel: string;
  constructor() {}
}
export class DataProprietaire {
  constructor(private http:HttpClient) { }
}
