import {Component, EventEmitter, Output} from '@angular/core';
import {StivaleRepositoryService} from '../../service/ajax/stivale-repository.service';
import {Stivale} from '../../model/stivale';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-form-stivali',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './form-stivali.component.html',
  styleUrl: './form-stivali.component.css'
})
export class FormStivaliComponent {
  constructor(private repository:StivaleRepositoryService) {
  }

  possibiliMateriali:string[] = ["CUOIO","TELA","LEGNO","GOMMA"]
  possibiliAltezze:string[] = ["BASSO","MEDIO","ALTO"]

  stivaleDaInserire:Stivale = {costo:0,misura:0,materiale:"",altezza:``,impermeabile:false}

  @Output()
  stivaleCreato:EventEmitter<any> = new EventEmitter<any>();

  salva()
  {
    this.repository.insert(this.stivaleDaInserire).subscribe
    (
      ()=>{
        alert("Stivale inserito");
        this.stivaleCreato.emit();
      });
  }
}
