import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { InstanciaInterface } from '../_models/instancia.interface';

@Injectable( {
  providedIn: 'root'
} )
export class InstanciaService {

  url = environment.endpointinstancia;

  constructor( private http: HttpClient ) {
  }

  create( instancia: InstanciaInterface ): Observable<any> {
    return this.http.post( `${ this.url }create_full.json`, instancia ).pipe( map( res => res as any ) );
  }
}
