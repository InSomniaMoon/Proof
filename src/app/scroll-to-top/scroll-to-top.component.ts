import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

   windowScrolled: boolean;
  constructor() { }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    ngOnInit() {}
}
