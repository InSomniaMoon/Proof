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
import { PersoEtudesComponent } from './perso-etudes/perso-etudes.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoadingPageService } from './services/loading-page.service';
import { ArticlesService } from './services/articles.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchArticles } from './class/SearchArticles';


const appRoutes: Routes = [
  { path: 'Equipes', component:EquipeComponent },
  { path: 'Articles', component: ArticlesComponent },
  { path: '', component:AccueilComponent },
  { path: 'Etudes', component: EtudesComponent },
  { path: 'Etudes/:studyId', component: EtudesComponent },
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
    PersoEtudesComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    LoadingPageService,
    ArticlesService,
    SearchArticles
],
  bootstrap: [AppComponent]
})
export class AppModule { }
