import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etudes',
  templateUrl: './etudes.component.html',
  styleUrls: ['./etudes.component.css']
})
export class EtudesComponent implements OnInit {
  private param;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.snapshot.params['studyId'];
  }

  public getParamByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  public scroll() {
    if (this.param) {
      this.opensec(this.param);
    }
  }
  /*
   * Ouvre un élément de l'arccordéon
   * utilisé dans openSec/tion/
   */
  public openDom(dom) {
  document.getElementById(dom).classList.add('show');
  }

  /*
   * ouvre la section passée en paramètre.
   */
  public opensec(section) {
    switch (section) {

      case 'sna':
        this.openDom('collapseDomainsTwo');
        document.getElementById('brainStudy').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;


      default:
        break;
    }
  }

}
