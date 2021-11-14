import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'booleantostring'
} )
export class BooleantostringPipe implements PipeTransform {

  transform( value: boolean|unknown ): string {
    return value ? 'Si' : 'No';
  }

}
