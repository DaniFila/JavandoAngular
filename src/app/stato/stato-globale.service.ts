import { Injectable } from '@angular/core';
import {Stivale} from '../model/stivale';
import {StivaleRepositoryService} from '../service/ajax/stivale-repository.service';

@Injectable({
  providedIn: 'root'
})
export class StatoGlobaleService {


  stivaliInApp:Stivale[] = [];
  stivaleSelected:Stivale | null = null;

  constructor(private stivaleREPO:StivaleRepositoryService) {
    this.ricaricaArray();
  }



  ricaricaArray() {
    this.stivaleREPO.getAllStivali().subscribe(arrayDiStivali =>{
      this.stivaliInApp = arrayDiStivali
    })
  }

}
