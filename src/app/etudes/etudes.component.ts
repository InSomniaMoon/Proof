import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etudes',
  templateUrl: './etudes.component.html',
  styleUrls: ['./etudes.component.css']
})
export class EtudesComponent implements OnInit {
  private param;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.param = this.route.snapshot.params['studyId'];
    this.opensec(this.param);

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

      case 'Cerveau':
        this.openDom('collapseCerveau');
        document.getElementById('cerveau').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'SNA':
        this.openDom('collapseSNA');
        console.log('ok');
        document.getElementById('sna').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Sommeil':
        this.openDom('collapseSommeil');
        document.getElementById('sommeil').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Vision':
        this.openDom('collapseVision');
        document.getElementById('vision').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Neuro_Psychologie':
        this.openDom('collapseNeuropsy');
        document.getElementById('neuropsy').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Peau':
        this.openDom('collapsePeau');
        document.getElementById('peau').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Coeur':
        this.openDom('collapseCoeur');
        document.getElementById('coeur').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Génétique':
        this.openDom('collapseGénétique');
        document.getElementById('génétique').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Activite_Physique':
        this.openDom('collapseActivite_physique');
        document.getElementById('activite_physique').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Muscles':
        this.openDom('collapseMuscles');
        document.getElementById('muscles').scrollIntoView({ behavior: "smooth", inline: "start" })
        break;

      case 'Marche':
        this.openDom('collapseMarche');
        document.getElementById('marche').scrollIntoView({ behavior: "smooth", inline: "start" });
        console.log('marche');
        break;

      default:
        window.scrollTo({top: 0, behavior: 'smooth'});
        break;
    }
  }

}
