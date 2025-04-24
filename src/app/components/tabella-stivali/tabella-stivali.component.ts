import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Stivale} from '../../model/stivale';
import {StatoGlobaleService} from '../../stato/stato-globale.service';
import {RouterLink} from '@angular/router';
import {DettaglioStivaleComponent} from '../dettaglio-stivali/dettaglio-stivale.component';

@Component({
  selector: 'app-tabella-stivali',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './tabella-stivali.component.html',
  styleUrl: './tabella-stivali.component.css'
})
export class TabellaStivaliComponent {

  constructor(public stato:StatoGlobaleService) {}

}
