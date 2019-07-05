import { Component, OnInit, OnDestroy } from '@angular/core';
import { Move } from '../class/Moving';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perso-etudes',
  templateUrl: './perso-etudes.component.html',
  styleUrls: ['./perso-etudes.component.css']
})
export class PersoEtudesComponent implements OnInit, OnDestroy {
  public cerveau = new Move('cerveau');
  public sna = new Move('sna');
  public sommeil = new Move('sommeil');
  public vision = new Move('vision');
  public neuro = new Move('neuropsy');
  public peau = new Move('peau');
  public coeur = new Move('coeur');
  public génétique = new Move('génétique');
  public activité = new Move('activite_physique');
  public muscles = new Move('muscles');
  public marche = new Move('marche');

  constructor(private route: Router) {
  }
  ngOnInit() {
  }

  public ngOnDestroy() {
  }

  public goTo(id) {
    this.route.navigate(['/Etudes/', id])
  }


}
