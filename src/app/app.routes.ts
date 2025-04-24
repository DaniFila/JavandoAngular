import { Routes } from '@angular/router';
import {TabellaStivaliComponent} from './components/tabella-stivali/tabella-stivali.component';
import {FormStivaliComponent} from './components/form-stivali/form-stivali.component';
import {DettaglioStivaleComponent} from './components/dettaglio-stivali/dettaglio-stivale.component';

export const routes: Routes = [
  {path:"tabella",component:TabellaStivaliComponent},
  {path:"form",component:FormStivaliComponent},
  {path:"dettaglio/:pos",component:DettaglioStivaleComponent},
];
