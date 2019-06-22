import { Component, OnInit } from '@angular/core';
import { DataGiteService, Gite } from '../service/data/data-gite.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor( private serviceGite:DataGiteService) { }
  //constructor() { }

  gites:Gite[];

  ngOnInit() {
    this.getGites();
    
  }
  getGites(){
      this.serviceGite.executeDataGiteService().subscribe(
         response => this.handleGiteSuccessfulResponse(response)
      );
  }
  handleGiteSuccessfulResponse(response){
    console.log(response._embedded);
    this.gites = response._embedded.giteResources;
  }

}