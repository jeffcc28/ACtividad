import { Component, Input, OnInit } from '@angular/core';
import { VillanosService, Villano } from '../../services/villanos.service';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.scss'],
})
export class VillanosComponent implements OnInit {

  @Input() villanos: Villano[] = [];
  @Input() enFavoritos = false;

  constructor(private _villanosService: VillanosService) {
    console.log("Constructor villanos");
  }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
    console.log(this.villanos);
  }
  
 
}
