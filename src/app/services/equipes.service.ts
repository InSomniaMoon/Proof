import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  private uneEquipe = [
    /*{
      "name": "BART Nathalie",
      "title": "Ingénieur"
    },*/
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
    /*{
      "name": "BONGUE Bienvenu",
      "title": "Pharmacien Epidemiologiste"
    },*/
    /*{
      "name": "CAMBAZARD Frédéric",
      "title": "PU - PH"
    },*/
    {
      "name": "CELLE Sebastien",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
    },
/*  {
      "name": "COURT - FORTUNE Isabelle",
      "title": "PH"
    },
    {
      "name": "DA COSTA Antoine",
      "title": "PU - PH"
    },
*/  {
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
/*    {
      "name": "ISAAZ Karl",
      "title": "PU - PH"
    },*/
    {
      "name": "MAUDOUX Delphine",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
    },
    /*  {
        "name": "MOLLIEX Serge",
        "title": "PU - PH"
      },*/
    {
      "name": "NOEL Kelig",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
    },
    /*{
      "name": "PATURAL Hugues",
      "title": "PU - PH"
    },*/
    {
      "name": "PERROT Jean-Luc",
      "title": "PH",
      "image": "templatePhotoMembre.svg"
    },
    {
      "name": "PICHOT Vincent",
      "title": "Ingénieur",
      "image": "templatePhotoMembre.svg"
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
    /*{
      "name": "SCALABRE Aurélien",
      "title": "MCU - PH"
    },
    {
      "name": "TIFFET Olivier",
      "title": "PU - PH"
    },
    {
      "name": "TOURAINE Renaud",
      "title": "PH"
    },*/
    {
      "name": "TROMBERT-PAVIOT Béatrice",
      "title": "PU - PH",
      "image": "templatePhotoMembre.svg"
    },
    /*{
      "name": "VARLET François",
      "title": "PU - PH"
    }*/
  ];

  constructor() { }

  public getEquipe() {
    return this.uneEquipe
  }
}
