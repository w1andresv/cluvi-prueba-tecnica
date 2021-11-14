import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-error-field',
  templateUrl: './error-formulario.component.html'
} )
export class ErrorFormularioComponent {

  @Input() control!: FormControl|any;
  @Input() required!: string;
  @Input() minlength!: string;
  @Input() maxlength!: string;
  @Input() max!: string;
  @Input() min!: string;
  @Input() email!: string;
  @Input() nullValidator!: string;
  @Input() pattern!: string;
  @Input() length!: string;
  @Input() maxContentSize!: string;

  constructor() {
  }

  validacionFormulario() {
    return this.control && this.control.invalid && ( this.control.dirty || this.control.touched );
  }

  errorFormulario(): any {
    const error = this.control.errors;
    if ( !error ) {
      return;
    }
    if ( error.required ) {
      return this.required == null
        ? 'Este campo es requerido'
        : this.required;
    } else if ( error.minlength ) {
      return this.minlength == null
        ? `Este campo necesita mínimo ${ error.minlength.requiredLength } caracteres`
        : this.minlength;
    } else if ( error.maxlength ) {
      return this.maxlength == null
        ? `Este campo permite máximo ${ error.minlength.requiredLength } caracteres`
        : this.maxlength;
    } else if ( error.max ) {
      return this.max == null
        ? `Número sobrepasa el valor permitido`
        : this.max;
    } else if ( error.min ) {
      return this.min == null ?
        `Número por debajo del valor permitido (${error.min.min})` : this.min;
    } else if ( error.email ) {
      return this.email == null ? 'Correo electrónico no válido' : this.email;
    } else if ( error.pattern ) {
      return this.pattern == null
        ? 'El patrón no coincide con el necesario'
        : this.pattern;
    } else if ( error.length ) {
      return this.length == null
        ? 'Al campo le hacen falta valores'
        : this.length;
    }
  }
}
