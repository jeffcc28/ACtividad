import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

//SERVICIOS 

import { HeroesService } from "./servicios/heroes.service";
import { VillanosService } from "./servicios/villanos.service";

// RUTAS
import { APP_ROUTING } from "./app.routes";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

//  COMPONENTES 
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { VillanoComponent } from './components/villano/villano.component';
import { VillanoTarjetaComponent } from './components/villano-tarjeta/villano-tarjeta.component';
import { CrudHeroeComponent } from './components/crud-heroe/crud-heroe.component';
import { CrudHeroesComponent } from './components/crud-heroes/crud-heroes.component';
import { CrudVillanosComponent } from './components/crud-villanos/crud-villanos.component';
import { CrudVillanoComponent } from './components/crud-villano/crud-villano.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    VillanosComponent,
    VillanoComponent,
    VillanoTarjetaComponent,
    CrudHeroeComponent,
    CrudHeroesComponent,
    CrudVillanosComponent,
    CrudVillanoComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService,
    VillanosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
