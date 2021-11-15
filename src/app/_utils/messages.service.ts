import { Injectable } from '@angular/core';
import {  MessageService } from 'primeng/api';

@Injectable( {
  providedIn: 'root'
} )
export class MessagesService {

  constructor( private messageService: MessageService ) {
  }

  success( msg?: string ) {
    this.messageService.add( {
      severity: 'success',
      summary: 'Exito',
      key:'general',
      detail: msg ? msg : 'Acción realizada con exito!'
    } );
    setTimeout( () => {
      this.messageService.clear();
    }, 4000 );
  }

  error( msg?: string ) {
    this.messageService.add( {
      severity: 'error',
      summary: 'Error',
      key:'general',
      detail: msg ? msg : 'Ocurrio un error'
    } );

  }



}
