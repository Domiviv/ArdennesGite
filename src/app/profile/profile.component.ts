import { Component, OnInit } from '@angular/core';
import { DataClientService, Client } from '../service/data/data-client.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // clients: Client[];
  // client: Client;

  constructor(private basicauthentication:BasicAuthenticationService, private serviceClient:DataClientService) { }

  ngOnInit() {
    // this.basicauthentication.getAuthenticatedUserId();
    //  this.serviceClient.executeDataClientService().subscribe(
    //    response => this.handleClientSuccessfulResponse(response)
    //  );
    //  for (let clientFor of this.clients) {
    //    if(clientFor.email == this.basicauthentication.getAuthenticatedUser()){
    //     this.client = clientFor;
    //    }       
    //  }
  }
  // handleClientSuccessfulResponse(response: any) {
  //   console.log(response._embedded);
  //   this.clients = response._embedded.clientResources;
  // }
  
}

  

