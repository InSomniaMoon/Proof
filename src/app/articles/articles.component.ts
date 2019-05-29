import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  baseURL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
  db = "PubMed";
  constructor() { }

  ngOnInit() {
  }
 getUrl() : string {
   let url = this.baseURL + "einfo.fcgi?db=PubMed&term=SNA-EPIS)";

   return url;
 }
 getIdList() : void {

 }
 getSummarry(id : any) : string {
   let url = this.baseURL + "esummary.fcgi?db="+this.db+"&id="+ id;
   return url;
 }
}


