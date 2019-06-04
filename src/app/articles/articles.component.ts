import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { load } from '@angular/core/src/render3';
import { xml2js } from 'node_modules/xml-js/lib';
import { xml2json } from 'node_modules/xml-js/lib';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  
})
export class ArticlesComponent implements OnInit {
  //#region Variables
  public ArticleNumber;
  public summaries: [];
  private baseURL;
  private db;
  public title;
  public subtitle;
  public abstract;
  private docParser = new DOMParser();
  private req = new XMLHttpRequest();
  //#endregion

  constructor() {

  }

  //#region gets
  public getSummaryURL(idlist: string): string {return this.baseURL + "efetch.fcgi?db="+ this.db + "&id=" + idlist + "&rettype=xml";}
  public getSearchUrl(term: string): string { return this.baseURL + "esearch.fcgi?db=PubMed&term=SNA-EPIS+"+term; }
  public sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public getIdList(term: string): string {
      var XMLDoc = this.docParser.parseFromString(this.getXMLDocFromURL(this.getSearchUrl(term)), "application/xml");
      var IdList = "";
      var ids = XMLDoc.documentElement.getElementsByTagName('Id');
      for (let i = 0; i < ids.length; i++) {
        IdList += ids[i].firstChild.nodeValue;
        if (i != ids.length-1)
        {
          IdList += ',';
        }
      }
      this.ArticleNumber = XMLDoc.documentElement.getElementsByTagName('Count')[0].firstChild.nodeValue;
        return IdList;
  }

  public getSummaries() : any {
    return this.summaries;
  }
  //#endregion

  //#region sets
  getXMLDocFromURL(unURL: string) {
    this.req.open('GET', unURL, false);
    this.req.send(null);
    return this.req.responseText;

  } 
  //#endregion

  convertXmlJson(xml: any) {
    //xml = this.docParser.parseFromString(xml, "application/xml");
    var json = xml2js(xml, { compact: true });
    this.summaries = json;
    console.log(this.summaries)
  }


  ngOnInit() {
    this.baseURL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
    this.db = "PubMed";
    this.title = "Titre";
    this.subtitle = "sous-Titre";
    this.abstract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    this.convertXmlJson(this.getXMLDocFromURL(this.getSummaryURL(this.getIdList(''))));
  }

}
