import { Component, OnInit } from '@angular/core';
import { VillanosService, Villano } from '../../services/villanos.service';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.scss'],
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] = [];

  constructor(private _villanosService: VillanosService) {
    console.log("Constructor villanos");
  }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
    console.log(this.villanos);
  }
  
 
}
