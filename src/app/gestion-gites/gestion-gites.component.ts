import { Component, OnInit } from '@angular/core';
import { DataGiteService, Gite } from '../service/data/data-gite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-gites',
  templateUrl: './gestion-gites.component.html',
  styleUrls: ['./gestion-gites.component.css']
})
export class GestionGitesComponent implements OnInit {
  constructor(private serviceGite:DataGiteService, private router:Router) { }
  gites:Gite[];

  ngOnInit() {
    this.serviceGite.executeDataGiteService().subscribe(
      response => this.handleGiteSuccessfulResponse(response)
    );
  }
  handleGiteSuccessfulResponse(response: any) {
    console.log(response._embedded);
    this.gites = response._embedded.giteResources;
  }
  deleteGite(idgite: number){
    // Demande de confirmation de suppression
    if (confirm('Êtes-vous sur de vouloir supprimer ce gite?')) {
      // Suppression 
      this.serviceGite.deleteGite(idgite).subscribe(res => {
        // console.log(idclient + 'est supprimé');
        // Get liste de clients pour refresh les datas
        this.serviceGite.executeDataGiteService().subscribe(
          response => this.handleGiteSuccessfulResponse(response)
        );
      });
    }
  }
  editGite(idgite: number){
    sessionStorage.idgite=idgite;
    this.router.navigate(['edition-gite']);
  }
}
