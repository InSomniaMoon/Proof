import { Component, OnInit } from '@angular/core';
import { EquipesService } from '../services/equipes.service';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  public uneEquipe;
  constructor(equipe: EquipesService) {
    this.uneEquipe = equipe.getEquipe();
  }
 
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
