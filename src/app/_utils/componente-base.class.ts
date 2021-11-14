import { FormGroup } from '@angular/forms';


export abstract class ComponenteBaseClass {

	validacionIncorrectaComponente = false;

	abstract onSubmit(): void;

	limpiarFormulario( groupForm: FormGroup ): void {
		groupForm.reset();
	}

  markAsDirtyFormControlGroup( groupForm: FormGroup ): void {
		Object.keys( groupForm.controls ).forEach( key => {
			groupForm.controls[ key ].markAsDirty();
		} );
	}

	llenarFormulario( groupForm: FormGroup, objeto: any ): void {
		Object.keys( objeto ).forEach( key => {
			if ( groupForm.controls[ key ] !== undefined ) {
				groupForm.controls[ key ].setValue( objeto[ key ] );
			}
		} );
	}

}
