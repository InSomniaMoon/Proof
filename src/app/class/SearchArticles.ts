import { xml2js } from 'node_modules/xml-js/lib';

export class SearchArticles {
  public ArticleNumber;
  public summaries;
  private baseURL;
  private db;
  private docParser = new DOMParser();
  private req = new XMLHttpRequest();

  constructor() {
    this.baseURL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
    this.db = "PubMed";
    this.convertXmlJson(this.getXMLDocFromURL(this.getSummaryURL(this.getIdList(''))));
  }

  public convertXmlJson(xml: any) {
    var json = xml2js(xml, { compact: true });
    this.summaries = json;
  }

  public setSummaries(aSum) {
    this.summaries = aSum;
  }

  //#region gets
  public getSummaryURL(idlist: string): string { return this.baseURL + "efetch.fcgi?db=" + this.db + "&id=" + idlist + "&rettype=xml"; }

  public getSearchUrl(term: string): string { return this.baseURL + "esearch.fcgi?db=" + this.db + "&term=SNA-EPIS+" + term + "&RetMax=150"; }

  public getIdList(term: string): string {
    var XMLDoc = this.docParser.parseFromString(this.getXMLDocFromURL(this.getSearchUrl(term)), "application/xml");
    var IdList = "";
    var ids = XMLDoc.documentElement.getElementsByTagName('Id');
    for (let i = 0; i < ids.length; i++) {
      IdList += ids[i].firstChild.nodeValue;
      if (i != ids.length - 1) {
        IdList += ',';
      }
    }
    this.ArticleNumber = XMLDoc.documentElement.getElementsByTagName('Count')[0].firstChild.nodeValue;
    return IdList;
  }

  public getSummaries(): any {
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

}
