import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { EquipeComponent } from './equipe/equipe.component';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudesComponent } from './etudes/etudes.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {path: 'Equipe', component:EquipeComponent},
  {path : 'Articles', component:ArticlesComponent},
  {path: '', component:AccueilComponent},
  {path: 'Etudes', component:EtudesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    EquipeComponent,
    AccueilComponent,
    EtudesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
