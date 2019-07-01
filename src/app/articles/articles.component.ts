import { Component, OnInit} from '@angular/core';
import { LoadingPageService } from '../services/loading-page.service';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],

})
export class ArticlesComponent implements OnInit {
  public pageActual: number = 1;
  
  constructor(private loader: LoadingPageService, private articlesService: ArticlesService) {
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.loader.hideLoader();
  }

  public  getArticles() {
    return this.articlesService.searcher.getSummaries();
  }

  public getArticleNumber() {
    return this.articlesService.searcher.getArticleNumber()
  }
  public log(some) {
    console.log(some);
  }
}
