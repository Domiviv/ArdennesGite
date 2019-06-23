import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataGiteService, Gite } from 'src/app/service/data/data-gite.service';

@Component({
  selector: 'app-edition-gite',
  templateUrl: './edition-gite.component.html',
  styleUrls: ['./edition-gite.component.css']
})
export class EditionGiteComponent implements OnInit {

  constructor(private router:Router, private serviceGite:DataGiteService) { }
  @Input() gite: Gite;
  ngOnInit() {
    this.serviceGite.getGiteById(sessionStorage.idgite).subscribe(
      gite => this.gite = gite
    );
    console.log(this.gite);
  }

}
