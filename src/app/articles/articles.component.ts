import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  //#region Variables
  private baseURL;
  private db;
  private title;
  private abstract;
  private idList;
  //#endregion

  constructor() {
    this.baseURL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
    this.db = "PubMed";
    this.title = "Titre";
    this.abstract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    this.idList = "";


  }

  ngOnInit() {
  }
  //#region gets
  public getSearchUrl(): string { return this.baseURL + "esearch.fcgi?db=PubMed&term=SNA-EPIS"; }
  public getIdList(): any { return this.idList; }
  public getTitle(): string { return this.title; }
  public getAbstract(): string { return this.abstract; }
  public getSummarryUrl(id: any): string {return this.baseURL + "esummary.fcgi?db=" + this.db + "&id=" + id;}
  //#endregion

  //#region sets
  public setIdList(): void {
    const req = new XMLHttpRequest();
    var ids,xmlDoc: XMLDocument;
    req.open('GET', this.getSearchUrl(), false);
    req.send(null);
    xmlDoc = req.responseXML;
    ids = xmlDoc.documentElement.getElementsByTagName('Id');
//    ids = xmlDoc.documentElement.getElementsByTagName('Id');
    for (let i = 0; i < ids.length; i++) {
      this.idList += ids[i] + ', ';
    }
    console.log(this.idList);
  }

  //#endregion

  public test() {
  }
}


