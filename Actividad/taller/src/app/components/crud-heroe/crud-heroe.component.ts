import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Heroe_VillanoModel } from "../../models/heroe_villano.model";
import { HeroesService } from "../../servicios/crudHeroes.service";

import  Swal  from "sweetalert2";

@Component({
  selector: 'app-crud-heroe',
  templateUrl: './crud-heroe.component.html',
  styleUrls: ['./crud-heroe.component.css']
})
export class CrudHeroeComponent implements OnInit {

  heroe = new Heroe_VillanoModel();  

  constructor(private _heroesServices: HeroesService,
              private _route:ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this._route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this._heroesServices.getHeroe(id).subscribe((resp: Heroe_VillanoModel) => {
        this.heroe = resp;
        this.heroe.id = id;
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

    if (this.heroe.id) {
      peticion = this._heroesServices.actualizarHereo(this.heroe);
    } else {
      peticion = this._heroesServices.crearHeroe(this.heroe);
    }
    
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.name,
        text: 'Se actualizo Correctamente'
      });
    } )


  }


}
