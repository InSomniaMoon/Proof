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
    this.cerveau.startMoving();
    this.sna.startMoving();
    this.sommeil.startMoving();
    this.vision.startMoving();
    this.neuro.startMoving();
    this.peau.startMoving();
    this.coeur.startMoving();
    this.génétique.startMoving();
    this.activité.startMoving();
    this.muscles.startMoving();
    this.marche.startMoving();
    this.checkLoad();
  }

  public ngOnDestroy() {
    this.cerveau.stopMoving();
    this.sna.stopMoving();
    this.sommeil.stopMoving();
    this.vision.stopMoving();
    this.neuro.stopMoving();
    this.peau.stopMoving();
    this.coeur.stopMoving();
    this.génétique.stopMoving();
    this.activité.stopMoving();
    this.muscles.stopMoving();
    this.marche.stopMoving();
  }

  private checkLoad() {
    if (this.cerveau === null) {
      this.cerveau.stopMoving();
      this.sna.stopMoving();
      this.sommeil.stopMoving();
      this.vision.stopMoving();
      this.neuro.stopMoving();
      this.peau.stopMoving();
      this.coeur.stopMoving();
      this.génétique.stopMoving();
      this.activité.stopMoving();
      this.muscles.stopMoving();
      this.marche.stopMoving();
    }
  }


  public stop(id) {
    this.cerveau.stopMoving();
    this.sna.stopMoving();
    this.sommeil.stopMoving();
    this.vision.stopMoving();
    this.neuro.stopMoving();
    this.peau.stopMoving();
    this.coeur.stopMoving();
    this.génétique.stopMoving();
    this.activité.stopMoving();
    this.muscles.stopMoving();
    this.marche.stopMoving();
    this.route.navigate(['/Etudes/', id])
  }


}
