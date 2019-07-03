import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  private uneEquipe = [
    {
      "name": " BARTHELEMY Jean-Claude",
      "title": "PU - PH",
      "image": "JCB.jpg"
    },
    {
      "name": "BERGER Claire",
      "title": "PH",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "CELLE Sebastien",
      "title": "Ingénieur",
      "image": "SebastienC.jpg"
    },
    {
      "name": "GARCIN Arnauld",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "GARET Martin",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "HUPIN David",
      "title": "MCU - PH",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "MAUDOUX Delphine",
      "title": "Ingénieur",
      "image": "DelphineM.jpg"
    },
    {
      "name": "NOEL Kelig",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "PERROT Jean-Luc",
      "title": "PH",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "PICHOT Vincent",
      "title": "Ingénieur",
      "image": "VincentP.jpg"
    },
    {
      "name": "ROCHE Frédéric",
      "title": "PU - PH",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "ROMEYER - BOUCHARD Cécile",
      "title": "PH",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "Rouch Isabelle",
      "title": "PU-PH",
      "image": "IsabelleR.jpg"
    },
    {
      "name": "TROMBERT-PAVIOT Béatrice",
      "title": "PU - PH",
      "image": "BeatriceT.jpg"
    },
  ];

  constructor() { }

  public getEquipe() {
    return this.uneEquipe
  }
}
