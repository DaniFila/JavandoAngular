import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TabellaStivaliComponent} from './components/tabella-stivali/tabella-stivali.component';
import {Stivale} from './model/stivale';
import {StivaleRepositoryService} from './service/ajax/stivale-repository.service';
import {FormStivaliComponent} from './components/form-stivali/form-stivali.component';
import {DettaglioStivaleComponent} from './components/dettaglio-stivali/dettaglio-stivale.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabellaStivaliComponent, FormStivaliComponent, DettaglioStivaleComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
