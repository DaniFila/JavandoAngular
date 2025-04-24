import { Routes } from '@angular/router';
import {TabellaStivaliComponent} from './components/tabella-stivali/tabella-stivali.component';

export const routes: Routes = [
  {path:"tabella",component:TabellaStivaliComponent},
  {path:"form",component:FormDragoComponent},

  {path:"dettaglio/:pos",component:DettaglioDragoComponent},
];
