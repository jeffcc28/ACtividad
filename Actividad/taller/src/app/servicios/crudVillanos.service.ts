import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Heroe_VillanoModel } from "../models/heroe_villano.model";

import { map } from "rxjs/operators";
import { Villano } from './villanos.service';

@Injectable({
  providedIn: 'root'
})
export class VillanosService{

    constructor(private _http: HttpClient) { }

      private url = 'https://bd-firebase-jcc-default-rtdb.firebaseio.com/';
    
      crearVillano(villano: Heroe_VillanoModel) {
        return this._http.post(`${this.url}/villano.json`, villano).pipe(
          map((resp: any) => {
            villano.id = resp.id;
            return villano;
          })
        );
      }

      actualizarVillano(villano: Heroe_VillanoModel) {
    
        const villanoTemp = {
          ...villano
        }
    
        delete villanoTemp.id;
    
        return this._http.put(`${this.url}/villano/${villano.id}.json`, villanoTemp);
    
      }

      borrarVillano(id: string) {
        return this._http.delete(`${this.url}/villano/${id}.json`);
      }
      getVillano(id: string) {

        return this._http.get(`${this.url}/villano/${id}.json`);
      }
    
      getVillanos() {
        return this._http.get(`${this.url}/villano.json`).pipe(
          map(this.crearArreglo)
        );
      }
    
      private crearArreglo(villanoOBJ: object) {
        
        const villanos: Heroe_VillanoModel[] = [];
    
        Object.keys(villanoOBJ).forEach(key => {
          const villano: Heroe_VillanoModel = villanoOBJ[key];
          villano.id = key;
          
    
          villanos.push(villano);
        });
    
        
        if (villanoOBJ === null) { return []; }
        return villanos;
    
      }
    
  



}