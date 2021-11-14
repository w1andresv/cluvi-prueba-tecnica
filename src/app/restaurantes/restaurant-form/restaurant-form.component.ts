import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponenteBaseClass } from '../../_utils/componente-base.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantInterface } from '../../_models/restaurant.interface';
import { RestaurantService } from '../../_services/restaurant.service';
import { MessagesService } from '../../_utils/messages.service';

@Component( {
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: [ './restaurant-form.component.scss' ]
} )
export class RestaurantFormComponent extends ComponenteBaseClass implements OnInit {

  formulario!: FormGroup;
  optionsServices = [ { label: 'No', value: false }, { label: 'Si', value: true } ];
  loading: boolean = false;
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() restaurant!: RestaurantInterface | undefined;

  constructor( private formBuilder: FormBuilder,
               private restaurantService: RestaurantService,
               private messagesService: MessagesService ) {
    super();
  }

  get f() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.loadForm( this.restaurant );
  }

  loadForm( restaurant?: RestaurantInterface ) {
    this.formulario = this.formBuilder.group( {
      name: [ restaurant ? restaurant.name : null, Validators.compose( [ Validators.required, Validators.minLength( 3 ) ] ) ],
      service_delivery: [ restaurant ? restaurant.service_delivery : null ],
      service_take_away: [ restaurant ? restaurant.service_take_away : null ],
      service_book: [ restaurant ? restaurant.service_book : null ],
      service_room: [ restaurant ? restaurant.service_room : null ],
      service_table: [ restaurant ? restaurant.service_table : null ],
      number_of_branches: [ restaurant ? restaurant.number_of_branches : null, Validators.compose( [ Validators.required, Validators.min( 1 ) ] ) ],
      address: [ restaurant ? restaurant.address : null ],
    } );
  }

  onSubmit() {
    this.markAsDirtyFormControlGroup( this.formulario );
    if ( this.formulario.invalid ) {
      return;
    }
    this.loading= true;
    const data = this.formulario.value as RestaurantInterface;
    if ( this.restaurant &&this.restaurant._id ) {
      this.restaurantService.update( data, this.restaurant._id ).subscribe( res => {
        this.dismiss.emit( true );
        this.messagesService.success();
         this.loading= false;
      }, error => {
        this.messagesService.error();
         this.loading= false;
      } );
    } else {
      this.restaurantService.create( data ).subscribe( res => {
        this.dismiss.emit( true );
        this.messagesService.success();
         this.loading= false;
      }, error => {
        this.messagesService.error();
         this.loading= false;
      } );
    }
  }

  cancelar() {
    this.limpiarFormulario( this.formulario );
    this.dismiss.emit( false );
  }

}
