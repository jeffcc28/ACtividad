import { Component, OnInit, Input} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { HeroesService } from "../../services/heroes.service";
import { DatalocalService } from '../../services/datalocal.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number;
  @Input() enFavoritos;

  
  

  constructor(private actionSheetCtrl: ActionSheetController, 
              private datalocalService:DatalocalService) {
    
   }

  ngOnInit(): void {

  }

  async lanzarMenu(){

    let guardarBorrarBtn;

    if (!this.enFavoritos) {
      guardarBorrarBtn = 
      {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.guardarHeroes(this.heroe);
        }
      }
    } else {
      guardarBorrarBtn = 
      {
        text: 'Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.borrarHeroes(this.heroe);
        }
      }

    }

    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Favorite',
        icon: 'star-outline',
        handler: () => {
          this.datalocalService.guardarHeroes(this.heroe)
          
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
