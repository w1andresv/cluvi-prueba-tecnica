import { NgModule } from '@angular/core';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { PrimengModule } from '../primeng.module';
import { CommonModule } from '@angular/common';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorFormularioModule } from '../_utils/error-formulario/error-formulario.module';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { BooleantostringPipe } from '../_utils/_pipes/booleantostring.pipe';

@NgModule( {
  declarations: [
    RestauranteComponent,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    BooleantostringPipe
  ],
  imports: [
    RestauranteRoutingModule,
    PrimengModule,
    CommonModule,
    ReactiveFormsModule,
    ErrorFormularioModule
  ],
  providers: [],
  exports: [
    BooleantostringPipe
  ]
} )
export class RestauranteModule {
}
