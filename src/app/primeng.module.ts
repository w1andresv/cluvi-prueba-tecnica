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
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const MODULES = [
  InputTextModule,
  ButtonModule,
  RippleModule,
  SelectButtonModule,
  KeyFilterModule,
  DividerModule,
  PanelModule,
  FieldsetModule,
  InputMaskModule,
  MessageModule,
  TableModule,
  ToastModule,
  ConfirmDialogModule

];

@NgModule( {
  imports: MODULES,
  exports: MODULES
} )
export class PrimengModule {
}

