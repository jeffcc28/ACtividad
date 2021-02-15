import { Injectable } from '@angular/core';
import { Heroe } from './heroes.service';

import { Storage } from "@capacitor/core";
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  heroes: Heroe[] = [];
  

  constructor(public toastController: ToastController) {
    this.cargarFavoritos();
   }

   //heroes

  guardarHeroes(heroe: Heroe) {
       
      const existe = this.heroes.find(hero => hero.nombre === heroe.nombre);

      if (!existe) {
      this.heroes.unshift(heroe);
     
          Storage.set({
             key: 'favoritos',
             value: JSON.stringify(this.heroes)
          });
     }
    
     this.presentToast( 'Se guardo en favoritos');
  }

  cargarFavoritos() {
 
     const favorito = Storage.get({ key: 'favoritos' }).then(favorito => {
       if (favorito.value != null) {
         this.heroes.unshift(JSON.parse(favorito.value));
         
       }
     });    
   }
   borrarHeroes (heroe: Heroe) {
    this.heroes = this.heroes.filter(hero=> hero.nombre != heroe.nombre);

    Storage.set({
      key: 'favoritos',
      value: JSON.stringify(this.heroes)
    });
    this.presentToast( 'Borrado de favoritos' );
  }
   
   async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }
  


  
}
