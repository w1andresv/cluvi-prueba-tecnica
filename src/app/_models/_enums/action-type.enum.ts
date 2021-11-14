import { GenericEnum } from './generic-enum';

export class ActionType extends GenericEnum {

}

export class EActionType extends ActionType {

  public static TABLE = new ActionType( 0, 'TABLE', 'Tabla' );
  public static ADD = new ActionType( 1, 'ADD', 'Agregar' );
  public static EDIT = new ActionType( 2, 'EDIT', 'Editar' );
  public static DETAIL = new ActionType( 3, 'DETAIL', 'Detalle' );

  static values(): ActionType[] {
    const values: any[] = [];
    Object.keys( this ).forEach( key => {
      // @ts-ignore
      values.push( this[ key ] );
    } );
    return values;
  }

  static findById( id: number ): ActionType | undefined {
    return this.values().find( value => value.id === id );
  }

  static findByCode( code: string ): ActionType | undefined {
    return this.values().find( value => value.code === code );
  }

  static stringVal( enumerado: ActionType ): string | undefined {
    return Object.keys( EActionType ).find( s => {
      // @ts-ignore
      return EActionType[ s ] === enumerado;
    } );
  }

  static codeToStringValue( code: string ): string|undefined {
    // @ts-ignore
    return this.stringVal( this.findByCode( code ) );
  }
}
