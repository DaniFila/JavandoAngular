import {Component, Input} from '@angular/core';
import {Stivale} from '../../model/stivale';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dettaglio-stivale',
  imports: [
    NgIf
  ],
  templateUrl: './dettaglio-stivale.component.html',
  styleUrl: './dettaglio-stivale.component.css'
})
export class DettaglioStivaleComponent {

  @Input() stivale:Stivale | null = null;


}
