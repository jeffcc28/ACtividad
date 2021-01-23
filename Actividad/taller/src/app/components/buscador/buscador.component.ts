import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { VillanosService} from "../../servicios/villanos.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  villanos:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService,
              private _villanoService: VillanosService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      this.villanos = this._villanoService.buscarVilanos( params['termino'] );
       //console.log( this.heroes );
    });

  }
}
