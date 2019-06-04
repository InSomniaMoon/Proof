import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  public uneEquipe = [
    {
      "name": "BART Nathalie",
      "title": "Ing."
    },
    {
      "name": " BARTHELEMY Jean-Claude",
      "title": "PU - PH"
    },
    {
      "name": "BERGER Claire",
      "title": "PH"
    },
    {
      "name": "BONGUE Bienvenu",
      "title": "Pharma.Epidemiol."
    },
    {
      "name": "CAMBAZARD Frédéric",
      "title": "PU - PH"
    },
    {
      "name": "CELLE Sebastien",
      "title": "Ing."
    },
    {
      "name": "COURT - FORTUNE Isabelle",
      "title": "PH"
    },
    {
      "name": "DA COSTA Antoine",
      "title": "PU - PH"
    },
    {
      "name": "GARCIN Arnauld",
      "title": "Ing."
    },
    {
      "name": "GARET Martin",
      "title": "Ing."
    },
    {
      "name": "HUPIN David",
      "title": "MCU - PH"
    },
    {
      "name": "ISAAZ Karl",
      "title": "PU - PH"
    },
    {
      "name": "MAUDOUX Delphine",
      "title": "Ing."
    },
    {
      "name": "MOLLIEX Serge",
      "title": "PU - PH"
    },
    {
      "name": "NOEL Kelig",
      "title": "Ing."
    },
    {
      "name": "PATURAL Hugues",
      "title": "PU - PH"
    },
    {
      "name": "PERROT Jean-Luc",
      "title": "PH"
    },
    {
      "name": "PICHOT Vincent",
      "title": "Ing."
    },
    {
      "name": "ROCHE Frédéric",
      "title": "PU - PH"
    },
    {
      "name": "ROMEYER - BOUCHARD Cécile",
      "title": "PH"
    },
    {
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
    },
    {
      "name": "TROMBERT-PAVIOT Béatrice",
      "title": "PU - PH"
    },
    {
      "name": "VARLET François",
      "title": "PU - PH"
    }
  ];
  public i;
  constructor() { }
 
  ngOnInit() {
  }

}
