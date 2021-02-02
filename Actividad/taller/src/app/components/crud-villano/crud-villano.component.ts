import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Heroe_VillanoModel } from "../../models/heroe_villano.model";
import { VillanosService } from '../../servicios/crudVillanos.service';

import  Swal  from "sweetalert2";

@Component({
  selector: 'app-crud-villano',
  templateUrl: './crud-villano.component.html',
  styleUrls: ['./crud-villano.component.css']
})
export class CrudVillanoComponent implements OnInit {

  villano = new Heroe_VillanoModel(); 

  constructor(private _villanosServices: VillanosService,
              private _route:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this._route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this._villanosServices.getVillano(id).subscribe((resp: Heroe_VillanoModel) => {
        this.villano = resp;
        this.villano.id = id;
      });
    }
  }

  guardar( form: NgForm) {
    
    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    } 
    
    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      allowOutsideClick:false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.villano.id) {
      peticion = this._villanosServices.actualizarVillano(this.villano);
    } else {
      peticion = this._villanosServices.crearVillano(this.villano);
    }
    
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.villano.name,
        text: 'Se actualizo Correctamente'
      });
    } )


  }

}
