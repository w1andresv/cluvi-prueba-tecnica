import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstanciaComponent } from '../instancias/instancia/instancia.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const routes: Routes = [
  {
    path: '',
    component: RestauranteComponent
  },
  // {
  //   path: 'crear',
  //   component: null
  // }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class RestauranteRoutingModule {
}
