import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ($('[data-toggle="tooltip"]') as any).tooltip();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
