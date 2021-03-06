import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'instancia',
    loadChildren: () => import(`./instancias/instancia.module`).then( m => m.InstanciaModule )
  },
  {
    path: 'restaurantes',
    loadChildren: () => import(`./restaurantes/restaurante.module`).then( m => m.RestauranteModule )
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
