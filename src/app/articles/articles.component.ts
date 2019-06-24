import { Component, OnInit, Input} from '@angular/core';
import { SearchArticles } from '../class/SearchArticles';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],

})
export class ArticlesComponent implements OnInit {
  public searcher;

  constructor() {
    this.searcher = new SearchArticles();
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }  
}
