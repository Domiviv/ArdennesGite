import { Component, OnInit } from '@angular/core';
import { DataClientService } from '../service/data/data-client.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor(private service:DataClientService) { }
  //constructor() { }

  //clients:Client[];

  ngOnInit() {
  }

  getClient(){
    console.log('ok')
      this.service.executeDataStudentService().subscribe(
         response => this.handleSuccessfulResponse(response)
       );
  }

  handleSuccessfulResponse(response){
    console.log(response._embedded);
    //this.students = response._embedded.etudiants;
  }

}