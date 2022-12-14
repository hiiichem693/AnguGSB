import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//import { AuthGuard } from 'auth.guard';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';

import {VisiteurService} from "./service/visiteur.service";
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import {FichefraisService} from "./service/fichefrais.service";
import {FraishorsforfaitService} from "./service/fraishorsforfait.service";
import { FichefraisComponent } from "./fichefrais/fichefrais.component";
import { ConnexionComponent } from './connexion/connexion.component';
import {EtatService} from "./service/etat.service";
import { AccueilComponent } from './accueil/accueil.component';
import { FichefraishfComponent } from './fichefraishf/fichefraishf.component';
import { ListefraishorsforfaitComponent } from './listefraishorsforfait/listefraishorsforfait.component';
import { AjoutFicheFraisComponent } from "./ajoutfichefrais/ajoutfichefrais.component";
import { AjouterfraishfComponent } from './ajouterfraishf/ajouterfraishf.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    ListefichefraisComponent,
    ConnexionComponent,
    FichefraisComponent,
    AccueilComponent,
    FichefraishfComponent,
    ListefraishorsforfaitComponent,
    AjoutFicheFraisComponent,
    AjouterfraishfComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
