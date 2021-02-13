import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.scss'],
})
export class VillanoComponent implements OnInit {
  
  @Input() villano: any = {};
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

}
