import { Component, OnInit } from '@angular/core';
import { Heroe_VillanoModel } from "../../models/heroe_villano.model";
import { HeroesService } from "../../servicios/crudHeroes.service";

import Swal from "sweetalert2";

@Component({
  selector: 'app-crud-heroes',
  templateUrl: './crud-heroes.component.html',
  styleUrls: ['./crud-heroes.component.css']
})
export class CrudHeroesComponent implements OnInit {

  heroes: Heroe_VillanoModel[] = [];
  cargando = true;

  constructor( private _heroeServices: HeroesService) { }

  ngOnInit(): void {
    this._heroeServices.getHeroes().subscribe(resp => {
      this.heroes = resp;
      this.cargando = false;
    });

  }
  
  private borrarHeroe(heroe: Heroe_VillanoModel, i: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: `Estas seguro que deseas eliminar a ${ heroe.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!!!'
    }).then( resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this._heroeServices.borrarHeroe(heroe.id).subscribe();         
        }
    })
  }


}
