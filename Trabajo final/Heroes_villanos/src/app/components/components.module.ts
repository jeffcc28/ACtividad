import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from "./heroe/heroe.component";
import { VillanoComponent } from './villano/villano.component';
import { VillanosComponent} from "./villanos/villanos.component";


import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [HeroesComponent,HeroeComponent, VillanoComponent,VillanosComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeroesComponent,
    VillanosComponent,
    HeroeComponent,
    VillanoComponent

  ]
})
export class ComponentsModule { }
