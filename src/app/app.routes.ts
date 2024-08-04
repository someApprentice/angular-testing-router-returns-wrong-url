import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RoutedComponent } from './routed/routed.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'routed', component: RoutedComponent }
];
