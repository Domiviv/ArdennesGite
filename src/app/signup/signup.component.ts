import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataClientService, Client } from '../service/data/data-client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  model: any = {};
  client: Client = new Client;

  constructor(private router:Router, private serviceClient:DataClientService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.client.idclient = -1;
    this.client.prenom = this.model.prenom;
    this.client.nom = this.model.nom;
    this.client.email = this.model.email;
    this.client.cp = this.model.cp;
    this.client.tel = this.model.tel;
    this.client.mdp = this.model.mdp;
    this.client.blacklist = 0;

    this.serviceClient.addClient(this.client).subscribe(
      response => this.handleClientSuccessfulResponse(response)
    );
  }
  handleClientSuccessfulResponse(response){
    console.log(response._embedded);
  }
}
