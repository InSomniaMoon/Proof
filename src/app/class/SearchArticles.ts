import { xml2js } from 'node_modules/xml-js/lib';

export class SearchArticles {
  private ArticleNumber;
  private summaries;
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

  //#region gets
  public getSearchUrl(term: string): string {
    term = term.replace(' ', '+AND+');
    term = term.replace('-', '%2D');
    return this.baseURL + "esearch.fcgi?db=" + this.db
      + "&term=(PROOF%20AND%20(STUDY%20OR%20COHORT)%20AND%20(Roche%20F%20OR%20Barthélémy))%20OR%20SNA-EPIS+AND%20" //termes de base à chercher
      + term
      + "&RetMax=150"; //nombre d'ids d'artiles maximum à récupérer
  }

  public getSummaryURL(idlist: string): string { return this.baseURL + "efetch.fcgi?db=" + this.db + "&id=" + idlist + "&rettype=xml"; }

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
  public getArticlesNumber() { return this.ArticleNumber }
  //#endregion

  //#region sets
  getXMLDocFromURL(unURL: string) {
    this.req.open('GET', unURL, false);
    this.req.send(null);
    return this.req.responseText;
  }

  public setSummaries(aSum) {
    this.summaries = aSum;
  }

  //#endregion

}
