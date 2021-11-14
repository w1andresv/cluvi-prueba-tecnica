import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RestaurantInterface } from '../_models/restaurant.interface';

@Injectable( {
  providedIn: 'root'
} )
export class RestaurantService {

  url = environment.endpointrestautant;

  constructor( private http: HttpClient ) {
  }

  getall(): Observable<RestaurantInterface[]> {
    return this.http.get( `${ this.url }` ).pipe( map( res => res as RestaurantInterface[] ) );
  }

  create( restaurant: RestaurantInterface ): Observable<any> {
    return this.http.post( `${ this.url }`, restaurant ).pipe( map( res => res as any ) );
  }

  update( restaurant: RestaurantInterface, id:any ): Observable<any> {
    return this.http.put( `${ this.url }/${ id }`, restaurant ).pipe( map( res => res as any ) );
  }
  delete( id:any ): Observable<any> {
    return this.http.delete( `${ this.url }/${ id }` ).pipe( map( res => res as any ) );
  }
}
