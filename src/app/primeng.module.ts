import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

const MODULES = [
  AccordionModule,
  InputTextModule,
  ButtonModule,
  RippleModule,
  SelectButtonModule,
  InputNumberModule,
  KeyFilterModule,
  DividerModule,
  PanelModule,
  FieldsetModule,
  InputMaskModule,
  MessagesModule,
  MessageModule

];

@NgModule( {
  imports: MODULES,
  exports: MODULES
} )
export class PrimengModule {
}

