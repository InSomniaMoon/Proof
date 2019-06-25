import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoadingPageService {

  constructor(private router:Router) { }

  public showLoader() {
    if (this.router.url != '/Articles') {
    document.getElementById('loader').classList.remove('invisible');
    }

  }

  public hideLoader() {
    document.getElementById('loader').classList.add('invisible');

  }
 }
