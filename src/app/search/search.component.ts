import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string;

  constructor(private articles: ArticlesService) { }

  search() {
    this.articles.searcher.setSummaries(this.articles.searcher.convertXmlJson(this.articles.searcher.getXMLDocFromURL(this.articles.searcher.getSummaryURL(this.articles.searcher.getIdList(this.searchItem)))));
  }

  ngOnInit() {
    
  }
}
