import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule( {
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    LayoutComponent
  ],
  bootstrap: [ LayoutComponent ]
} )
export class LayoutModule {
}
