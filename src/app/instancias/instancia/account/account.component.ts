import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponenteBaseClass } from '../../../_utils/componente-base.class';
import { InstanciaInterface, WizardInterface } from '../../../_models/instancia.interface';
import { InstanciaService } from '../../../_services/instancia.service';
import { AppComponent } from '../../../app.component';

declare let google: any;

@Component( {
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.scss' ]
} )
export class AccountComponent extends ComponenteBaseClass implements OnInit, AfterViewInit {

  formulario!: FormGroup;
  viewPassword: boolean = false;
  optionsServices = [ { label: 'No', value: false }, { label: 'Si', value: true } ];
  addressLoad: boolean = false;
  loading: boolean = false;

  constructor( private formBuilder: FormBuilder,
               private instanciaService: InstanciaService,
               private appComponent: AppComponent ) {
    super();
  }

  get f() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.loadForm();
  }

  ngAfterViewInit(): void {
    setTimeout( () => {
      this.init_map();
    }, 400 );
  }

  loadForm() {
    this.formulario = this.formBuilder.group( {
      first_name: [ null, Validators.compose( [ Validators.required, Validators.minLength( 3 ) ] ) ],
      last_name: [ null, Validators.compose( [ Validators.required, Validators.minLength( 3 ) ] ) ],
      email: [ null, Validators.compose( [ Validators.required, Validators.email ] ) ],
      password: [ null, Validators.compose( [ Validators.required, Validators.minLength( 6 ) ] ) ],
      phoneCode: [ null ],
      phoneNumber: [ null ],
      name: [ null, Validators.compose( [ Validators.required, Validators.minLength( 3 ) ] ) ],
      service_delivery: [ null ],
      service_take_away: [ null ],
      service_book: [ null ],
      service_room: [ null ],
      service_table: [ null ],
      number_of_branches: [ null, Validators.compose( [ Validators.required, Validators.min( 1 ) ] ) ],
      latitude: [ null ],
      longitude: [ null ],
      address: [ null ],
      country_long_name: [ null ],
      city_long_name: [ null ],
    } );
  }

  onSubmit() {
    this.markAsDirtyFormControlGroup( this.formulario );
    if ( this.formulario.invalid ) {
      return;
    }
    const data = this.formulario.value;
    this.loading = true;
    this.instanciaService.create( this.formatData( data ) ).subscribe( res => {
      this.limpiarFormulario( this.formulario );
      this.appComponent.success();
      this.loading = false;
    }, error => {
      this.appComponent.error();
      this.loading = false;
    } );

  }

  init_map( lat?: any, lng?: any ) {
    let latLng: any;
    if ( lat && lng ) {
      latLng = new google.maps.LatLng( Number( lat ), Number( lng ) );
    } else {
      latLng = new google.maps.LatLng( 7.11392, -73.1198 );
    }
    const marker = new google.maps.Marker( {
      position: latLng,
      map: null,
      draggable: true,
      animation: google.maps.Animation.DROP,
    } );
    const input = document.getElementById( 'pac-input' );
    const autocomplete = new google.maps.places.Autocomplete( input );
    const infowindow = new google.maps.InfoWindow();
    infowindow.setContent();
    autocomplete.addListener( 'place_changed', () => {
      this.addressLoad = false;
      infowindow.close();
      const place = autocomplete.getPlace();
      this.getAddressData( place.address_components );
      if ( !place.geometry ) {
        window.alert( 'No details available for input: \'' + place.name + '\'' );
        return;
      }
      marker.setPosition( place.geometry.location );
      const latLng = marker.getPosition().toJSON();
      let address = '';
      if ( place.address_components ) {
        address = [
          ( place.address_components[ 0 ] && place.address_components[ 0 ].short_name || '' ),
          ( place.address_components[ 1 ] && place.address_components[ 1 ].short_name || '' ),
          ( place.address_components[ 2 ] && place.address_components[ 2 ].short_name || '' )
        ].join( ' ' );
      }
      this.formulario.controls.latitude.setValue( latLng.lat );
      this.formulario.controls.longitude.setValue( latLng.lng );
      this.formulario.controls.address.setValue( place.formatted_address );
      this.addressLoad = true;
    } );
  }

  getAddressData( data: any ) {
    data.map( ( x: any ) => {
      if ( x.types[ 0 ] === 'country' ) {
        this.formulario.controls.country_long_name.setValue( x.long_name );
      }
      if ( x.types[ 0 ] === 'locality' || x.types[ 0 ] === 'administrative_area_level_2' ) {
        this.formulario.controls.city_long_name.setValue( x.long_name );
      }
    } );
  }

  cancelar() {
    this.limpiarFormulario( this.formulario );
  }

  validateDirection() {
    setTimeout( () => {
      if ( !this.formulario.controls.latitude.value && !this.formulario.controls.longitude.value ) {
        this.formulario.controls.address.setValue( null );
      }
    }, 400 );
  }

  formatData( data: any ): InstanciaInterface {
    let wizard: WizardInterface = {
      country: {
        long_name: data.country_long_name
      },
      user: {
        last_name: data.last_name,
        first_name: data.first_name,
        email: data.email,
        password: data.password,
        phone: {
          code: data.phoneCode,
          number: data.phoneNumber
        }
      },
      city: {
        long_name: data.city_long_name
      },
      location: {
        longitude: data.longitude,
        latitude: data.latitude,
        address: data.address
      },
      customer: {
        name: data.name,
        service_book: data.service_book,
        service_delivery: data.service_delivery,
        service_take_away: data.service_take_away,
        service_room: data.service_room,
        service_table: data.service_table,
        number_of_branches: data.number_of_branches
      }
    };
    let instancia: InstanciaInterface = {
      wizard: wizard
    };
    return instancia;
  }
}

