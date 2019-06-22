import { Component, OnInit } from '@angular/core';
import { DataClientService, Client } from '../service/data/data-client.service';

@Component({
  selector: 'app-gestion-clients',
  templateUrl: './gestion-clients.component.html',
  styleUrls: ['./gestion-clients.component.css']
})
export class GestionClientsComponent implements OnInit {

  constructor(private serviceClient:DataClientService) { }
  clients:Client[];

  ngOnInit() {
    this.serviceClient.executeDataClientService().subscribe(
      response => this.handleClientSuccessfulResponse(response)
    );
  }
  handleClientSuccessfulResponse(response){
    console.log(response._embedded);
    this.clients = response._embedded.clientResources;
  }

}
