import { Component, OnInit,Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { DatalocalvillanosService } from '../../services/datalocalvillanos.service';
import { Villano } from '../../services/villanos.service';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.scss'],
})
export class VillanoComponent implements OnInit {
  
  @Input() villano: any = {};
  @Input() idx: number;
  @Input() enFavoritos;

  constructor(private actionSheetCtrl: ActionSheetController, private datalocalService:DatalocalvillanosService) { }

  ngOnInit() {}

  async lanzarMenu(){

    let guardarBorrarBtn;

    if (!this.enFavoritos) {
      guardarBorrarBtn = 
      {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.guardarVillanos(this.villano);
        }
      }
    } else {
      guardarBorrarBtn = 
      {
        text: 'Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.borrarVillanos(this.villano);
        }
      }

    }

    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Favorite',
        icon: 'star-outline',
        handler: () => {
          this.datalocalService.guardarVillanos(this.villano)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
