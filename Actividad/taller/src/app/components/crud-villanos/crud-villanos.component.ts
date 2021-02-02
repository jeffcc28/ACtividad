import { Component, OnInit } from '@angular/core';
import { Heroe_VillanoModel } from "../../models/heroe_villano.model";
import { VillanosService } from '../../servicios/crudVillanos.service';

import Swal from "sweetalert2";


@Component({
  selector: 'app-crud-villanos',
  templateUrl: './crud-villanos.component.html',
  styleUrls: ['./crud-villanos.component.css']
})
export class CrudVillanosComponent implements OnInit {

  villanos: Heroe_VillanoModel[] = [];
  cargando = true;

  constructor(private _villanosServices : VillanosService) { }

  ngOnInit(): void {
    this._villanosServices.getVillanos().subscribe(resp => {
      this.villanos = resp;
      this.cargando = false;
    });
  }

  private borrarVillano(villano: Heroe_VillanoModel, i: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: `Estas seguro que deseas eliminar a ${villano.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!!!'
    }).then( resp => {
      if (resp.value) {
        this.villanos.splice(i, 1);
        this._villanosServices.borrarVillano(villano.id).subscribe();         
        }
    })
  }

}
