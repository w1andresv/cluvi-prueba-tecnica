import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstanciaComponent } from './instancia/instancia.component';

const routes: Routes = [
  {
    path:"nueva",
    component:InstanciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstanciaRoutingModule { }
