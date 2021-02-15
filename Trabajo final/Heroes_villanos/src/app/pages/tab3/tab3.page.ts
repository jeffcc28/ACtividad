import { Component } from '@angular/core';
import { DatalocalService } from '../../services/datalocal.service';
import { DatalocalvillanosService } from '../../services/datalocalvillanos.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(public datalocalService:DatalocalService,public datalocalVillanosService:DatalocalvillanosService) {}

}
