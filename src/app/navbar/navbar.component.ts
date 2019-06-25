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
  public closeMenu() {
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }
  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async makeArticles() {
    this.loader.showLoader();
    this.closeMenu();
    await this.sleep(30);
    this.route.navigate(['/Articles']);

  }
}
