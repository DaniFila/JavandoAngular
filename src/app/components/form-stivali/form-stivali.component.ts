import {Component, EventEmitter, Output} from '@angular/core';
import {StivaleRepositoryService} from '../../service/ajax/stivale-repository.service';
import {Stivale} from '../../model/stivale';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {StatoGlobaleService} from '../../stato/stato-globale.service';
import {Router} from '@angular/router';

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
  constructor(private repository:StivaleRepositoryService,private stato:StatoGlobaleService,private router:Router) {
  }

  possibiliMateriali:string[] = ["CUOIO","TELA","LEGNO","GOMMA"]
  possibiliAltezze:string[] = ["BASSO","MEDIO","ALTO"]

  stivaleDaInserire:Stivale = {costo:0,misura:0,materiale:"",altezza:``,impermeabile:false}


  salva()
  {
    this.repository.insert(this.stivaleDaInserire).subscribe
    (
      ()=>{
        alert("Stivale inserito");
        this.stato.ricaricaArray();
        this.router.navigate(['/tabella']);
      });
  }
}
