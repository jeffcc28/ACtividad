import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Heroe_VillanoModel } from "../models/heroe_villano.model";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private _http: HttpClient) { }

  private url = 'https://bd-firebase-jcc-default-rtdb.firebaseio.com/';
  
  crearHeroe(heroe: Heroe_VillanoModel) {
    return this._http.post(`${this.url}/heroe.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.id;
        return heroe;
      })
    );
  }

  actualizarHereo(heroe: Heroe_VillanoModel) {
    
    const heroeTemp = {
      ...heroe
    }

    delete heroeTemp.id;

    return this._http.put(`${this.url}/heroe/${heroe.id}.json`, heroeTemp);

  }
 
  borrarHeroe(id: string) {
    return this._http.delete(`${this.url}/heroe/${id}.json`);
  }
   
  getHeroe(id: string) {

    return this._http.get(`${this.url}/heroe/${id}.json`);
  }

  getHeroes() {
    return this._http.get(`${this.url}/heroe.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(heroesOBJ: object) {
    
    const heroes: Heroe_VillanoModel[] = [];

    Object.keys(heroesOBJ).forEach(key => {
      const heroe: Heroe_VillanoModel = heroesOBJ[key];
      heroe.id = key;
      

      heroes.push(heroe);
    });

    
    if (heroesOBJ === null) { return []; }
    return heroes;

  }



}