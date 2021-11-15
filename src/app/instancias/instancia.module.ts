import { NgModule } from '@angular/core';
import { InstanciaComponent } from './instancia/instancia.component';
import { InstanciaRoutingModule } from './instancia-routing.module';
import { PrimengModule } from '../primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorFormularioModule } from '../_utils/error-formulario/error-formulario.module';

@NgModule({
  declarations: [
    InstanciaComponent,
  ],
  imports: [
    InstanciaRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    CommonModule,
    ErrorFormularioModule,

  ],
  providers: [],
  bootstrap: []
})
export class InstanciaModule { }
