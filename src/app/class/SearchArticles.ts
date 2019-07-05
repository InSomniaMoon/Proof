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
  }
   
  //#region gets
  //retourne summaries
  public getSummaries(): any {
    return this.summaries;
  }

  //retourne le nombre d'articles contenu dans la recherche
  public getArticleNumber(): number {
    return this.ArticleNumber;
  }

  getXMLDocFromURL(unURL: string) {
    this.req.open('GET', unURL, false);
    this.req.send(null);
    return this.req.responseText;
  }
  //#endregion

  
  //#region sets
  public setSummaries(aSum) {
    this.summaries = aSum;
  }
  //#endregion


  //#region Methods
  //convertie un fichier xml en json
  public convertXmlJson(xml: any) {
    var json = xml2js(xml, { compact: true });
    return json;
  }

  //crée l'url pour chercher les articles contenant les termes en entrée
  public getSearchUrl(term: string): string {
    term = term.replace(' ', '+AND+'); //permet d'enlever les espaces
    term = term.replace('-', '%2D'); //permet d'éviter un bug
    return this.baseURL + "esearch.fcgi?db=" + this.db //db pubmed
      + "&term=(PROOF%20AND%20(STUDY%20OR%20COHORT)%20AND%20(Roche%20F%20OR%20Barthélémy))%20OR%20SNA-EPIS+AND%20" //termes de base à chercher
      + term  //termes entrés par l'utilisateur
      + "&RetMax=150"; //nombre d'ids d'artiles maximum à récupérer
  }

  //retourne la liste des ids d'articles correspondant aux termes en entrée
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

  //retourne l'url contenant les données de chaque article
  public getSummaryURL(idlist: string): string { return this.baseURL + "efetch.fcgi?db=" + this.db + "&id=" + idlist + "&rettype=xml"; }


  //#endregion
}
