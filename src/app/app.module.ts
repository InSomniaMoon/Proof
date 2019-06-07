import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { EquipeComponent } from './equipe/equipe.component';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudesComponent } from './etudes/etudes.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'Equipes', component:EquipeComponent },
  { path: 'Articles', component: ArticlesComponent },
  { path: '', component:AccueilComponent },
  { path: 'Etudes', component: EtudesComponent },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'PageNotFound' }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    EquipeComponent,
    AccueilComponent,
    EtudesComponent,
    FooterComponent,
    ScrollToTopComponent,
    SearchComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
