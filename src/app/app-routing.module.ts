import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { FichefraisComponent } from './fichefrais/fichefrais.component';
import { AjoutFicheFraisComponent} from "./ajoutfichefrais/ajoutfichefrais.component";
import { NavbarComponent } from './navbar/navbar.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ListefraishorsforfaitComponent} from "./listefraishorsforfait/listefraishorsforfait.component";
import {FichefraishfComponent} from "./fichefraishf/fichefraishf.component";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Listefichefrais', component: ListefichefraisComponent },
  { path: 'modifierFrais/:id', component: FichefraisComponent },
  { path: 'ajouterFrais', component: AjoutFicheFraisComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'Listefraishorsforfait', component: ListefraishorsforfaitComponent},
  { path: 'modifierHF/:id', component: FichefraishfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

