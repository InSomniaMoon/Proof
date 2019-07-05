import { Component, OnInit, } from '@angular/core';
import { LoadingPageService } from '../services/loading-page.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private loader: LoadingPageService, private route: Router) { }

  ngOnInit() {
  }
  //ferme le menu au clic
  public closeMenu() {
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }

  //sleeper
  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //lance le loading screen au chargement des articles
  public async makeArticles() {
    this.loader.showLoader();
    this.closeMenu();
    await this.sleep(1);
    this.route.navigate(['/Articles']);

  }
}
