import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Stivale} from '../../model/stivale';

@Component({
  selector: 'app-tabella-stivali',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './tabella-stivali.component.html',
  styleUrl: './tabella-stivali.component.css'
})
export class TabellaStivaliComponent {

  @Input() stivali:Stivale[] = [];

  @Output()
  mostraDettaglio:EventEmitter<number> = new EventEmitter<number>();

  mostraDettaglioStivale(i: number) {
    this.mostraDettaglio.emit(i);
  }
}
