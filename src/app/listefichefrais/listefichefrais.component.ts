import { Component, OnInit } from '@angular/core';
import {Fichefrais} from '../metier/fichefrais';
import {FichefraisService} from "../service/fichefrais.service";
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: './app-listefichefrais',
  templateUrl:
    './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  public mesFrais: Fichefrais[] = [];
  public error: string = "";
  public id: number = 0;
  public titre: string = "";
  public unFrais: Fichefrais = new Fichefrais;

  constructor( private unFS: FichefraisService, private unRouteur: Router) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit() {
    let item = localStorage.getItem('id');
    // @ts-ignore
    this.id = item;
    this.titre = 'Liste des frais du visiteur ' + this.id;
    this.getFicheFraisListe(this.id);
  }

  getFicheFraisListe(id: number) : void {
    this.unFS.getFicheFraisListe(id).subscribe(
      (fichefrais) => {
        this.mesFrais = fichefrais;
        },
      (error) => {
        this.error = error.messages;
      }
    )
  }

  modifier(id: number): void {
    this.unRouteur.navigate(['/modifierFrais/'+id]);
  }

  Supprimer(id: number): void {

  }

}
