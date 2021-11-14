import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'cluvi-prueba-tecnica';
  msgs!: Message[];

  success( msg?: string ) {
    this.msgs = [
      { severity: 'success', summary: 'Exito', detail: msg ? msg : 'Acción realizada con exito!' }
    ];
    setTimeout( () => {
      this.msgs = [];
    }, 4000 );
  }

  error( msg?: string ) {
    this.msgs = [
      { severity: 'error', summary: 'Error', detail: msg ? msg : 'Ocurrio un error' }
    ];
    setTimeout( () => {
      this.msgs = [];
    }, 4000 );
  }
}
