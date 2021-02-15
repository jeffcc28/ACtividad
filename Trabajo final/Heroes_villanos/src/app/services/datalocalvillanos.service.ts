import { Injectable } from '@angular/core';
import { Villano } from './villanos.service';
import { Storage } from "@capacitor/core";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatalocalvillanosService {

  villanos:Villano[]=[];

  
  constructor(public toastController: ToastController) {
    this.cargarFavoritos();
   }

   guardarVillanos(villano: Villano) {
       
    const existe = this.villanos.find(villa => villa.nombre === villano.nombre);

    if (!existe) {
    this.villanos.unshift(villano);
   
        Storage.set({
           key: 'favoritos',
           value: JSON.stringify(this.villanos)
        });
   }
  
   this.presentToast( 'Se guardo en favoritos');
}
  

  cargarFavoritos() {
 
     const favorito = Storage.get({ key: 'favoritos' }).then(favorito => {
       if (favorito.value != null) {
        this.villanos.unshift(JSON.parse(favorito.value));
      }
     });    
   }
     
   async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }
  
  //villanos

  
borrarVillanos(villano: Villano) {
  this.villanos= this.villanos.filter(villa => villa.nombre === villano.nombre);

  Storage.set({
    key: 'favoritos',
    value: JSON.stringify(this.villanos)
  });
  this.presentToast( 'Borrado de favoritos' );
}

}
