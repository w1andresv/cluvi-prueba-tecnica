import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuInterface } from '../_models/menu.interface';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class MenuService {

  constructor( private http: HttpClient ) {
  }

  getMenu(): Observable<MenuInterface[]> {
    return this.http.get( './assets/dataBase/menu.json' ).pipe( map( res => res as MenuInterface[] ) );

  }
}
