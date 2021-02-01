import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { VillanosComponent } from "./components/villanos/villanos.component";
import { VillanoComponent } from "./components/villano/villano.component";
import { CrudHeroeComponent } from "./components/crud-heroe/crud-heroe.component";
import { CrudHeroesComponent } from './components/crud-heroes/crud-heroes.component';
import { CrudVillanoComponent } from './components/crud-villano/crud-villano.component';
import { CrudVillanosComponent } from "./components/crud-villanos/crud-villanos.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'villanos', component: VillanosComponent },
  { path: 'villano/:id', component: VillanoComponent },

  { path: 'crudheroes', component:  CrudHeroesComponent},
  { path: 'crudheroe/:id', component: CrudHeroeComponent },
  { path: 'crudvillanos', component: CrudVillanosComponent },
  { path: 'crudvillano/:id', component: CrudVillanoComponent },

  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

