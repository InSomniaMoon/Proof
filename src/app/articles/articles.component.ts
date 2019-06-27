import { Component, OnInit} from '@angular/core';
import { SearchArticles } from '../class/SearchArticles';
import { LoadingPageService } from '../services/loading-page.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],

})
export class ArticlesComponent implements OnInit {
  public searcher;

  constructor(private loader: LoadingPageService) {
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.searcher = new SearchArticles();
    this.loader.hideLoader();

  }  
}
