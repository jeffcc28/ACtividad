import { Component } from '@angular/core';
import { Villano, VillanosService } from "../../services/villanos.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  villanos: Villano[] = [];

  
  constructor(private _villanosService: VillanosService) {
    console.log("Constructor Heroes");
  }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
    console.log(this.villanos);
  }
}
