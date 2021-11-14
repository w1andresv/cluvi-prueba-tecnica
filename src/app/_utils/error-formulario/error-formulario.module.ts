import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFormularioComponent } from './error-formulario/error-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule( {
  declarations: [ ErrorFormularioComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ ErrorFormularioComponent ]
} )
export class ErrorFormularioModule {
}
