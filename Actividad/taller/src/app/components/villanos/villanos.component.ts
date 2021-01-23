import { Component, OnInit } from '@angular/core';
import { VillanosService, Villano } from "../../servicios/villanos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] = [];

  constructor(private _villanoService:VillanosService,
              private _router:Router) { 
      console.log('contructor Villanos');

  }

  ngOnInit(): void {
    this.villanos=this._villanoService.getVillanos();
    console.log(this.villanos);
  }


  verVillano(idx:number) {
    this._router.navigate(["/villano",idx]);
  }
  

}
