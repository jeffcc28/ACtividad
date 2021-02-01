import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudHeroeComponent } from './components/crud-heroe/crud-heroe.component';
import { CrudHeroesComponent } from './components/crud-heroes/crud-heroes.component';
import { CrudVillanosComponent } from './components/crud-villanos/crud-villanos.component';
import { CrudVillanoComponent } from './components/crud-villano/crud-villano.component';

const routes: Routes = [
  { path: 'heroes', component: CrudHeroesComponent },
  { path: 'heroe/:id', component: CrudHeroeComponent },
  { path:'**', pathMatch: 'full', redirectTo:'heroes'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
