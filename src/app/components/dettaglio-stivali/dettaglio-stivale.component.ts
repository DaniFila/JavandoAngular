import {Component, Input} from '@angular/core';
import {Stivale} from '../../model/stivale';
import {NgIf} from '@angular/common';
import {StatoGlobaleService} from '../../stato/stato-globale.service';

@Component({
  selector: 'app-dettaglio-stivale',
  imports: [
    NgIf
  ],
  templateUrl: './dettaglio-stivale.component.html',
  styleUrl: './dettaglio-stivale.component.css'
})
export class DettaglioStivaleComponent {

  constructor(private stato:StatoGlobaleService) {
  }

  @Input() pos:number=-1;

  getStivale()
  {
    return this.stato.stivaliInApp[this.pos];
  }


}
