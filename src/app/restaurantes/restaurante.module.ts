import { NgModule } from '@angular/core';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteRoutingModule } from './restaurante-routing.module';

@NgModule( {
  declarations: [
    RestauranteComponent
  ],
  imports: [
    RestauranteRoutingModule
  ],
  providers: [],
} )
export class RestauranteModule {
}
