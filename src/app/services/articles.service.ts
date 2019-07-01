import { Injectable } from '@angular/core';
import { SearchArticles } from '../class/SearchArticles';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(public searcher:SearchArticles) {
  }
  getSummaries() {
    return this.searcher.getSummaries();
  }

  public load() {
    this.searcher = new SearchArticles();
    this.searcher.setSummaries(this.searcher.convertXmlJson(this.searcher.getXMLDocFromURL(this.searcher.getSummaryURL(this.searcher.getIdList('')))));

  }

/*  getStorage() {
    return this.storage;
  }
  setStorage(astorage) {
    this.storage = astorage
  }
*/}

