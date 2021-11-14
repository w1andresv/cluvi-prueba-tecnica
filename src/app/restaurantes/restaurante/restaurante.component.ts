import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../_services/restaurant.service';
import { Table } from 'primeng/table';
import { EActionType } from '../../_models/_enums/action-type.enum';
import { RestaurantInterface } from '../../_models/restaurant.interface';
import { MessagesService } from '../../_utils/messages.service';
import { ConfirmationService } from 'primeng/api';

@Component( {
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: [ './restaurante.component.scss' ]
} )
export class RestauranteComponent implements OnInit {


  listRestaurants: any[] = [];
  loading: boolean = true;
  cols: any[] = [];
  type: EActionType = EActionType.TABLE;
  actionTable: EActionType = EActionType.TABLE;
  actionAdd: EActionType = EActionType.ADD;
  actionEdit: EActionType = EActionType.EDIT;
  actionDetail: EActionType = EActionType.DETAIL;
  restaurantSelected!: RestaurantInterface | undefined;

  constructor( private restaurantService: RestaurantService,
               private messagesService: MessagesService,
               private confirmationService: ConfirmationService ) {
  }

  ngOnInit(): void {
    this.getAllRestaurants();
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'address', header: 'Dirección' },
      { field: 'service_delivery', header: 'Domicilios' },
      { field: 'service_take_away', header: 'Para llevar' },
      { field: 'service_book', header: 'Reservas' },
      { field: 'service_table', header: 'En mesa' },
      // { field: 'service_room', header: 'En habitación' },
      // { field: 'number_of_branches', header: 'Nº sucursales' },
      { field: 'accions', header: 'Acciones' }
    ];
  }

  getAllRestaurants() {
    this.restaurantService.getall().subscribe( res => {
      this.listRestaurants = res;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.messagesService.error( 'Ocurrio un error al cargar los restaurantes, comuniquese con el administrador' );
    } );
  }

  filtro( table: Table, value: any, filter: string ) {
    table.filterGlobal( value.target.value, filter );
  }

  reset( event: boolean ) {
    if ( event ) {
      this.getAllRestaurants();
    }
    this.type = EActionType.TABLE;
  }

  add() {
    this.restaurantSelected = undefined;
    this.type = EActionType.ADD;
  }

  edit( restaurant: RestaurantInterface ) {
    this.restaurantSelected = restaurant;
    this.type = EActionType.EDIT;
  }

  detail( restaurant: RestaurantInterface ) {
    this.restaurantSelected = restaurant;
    this.type = EActionType.DETAIL;
  }

  delete( id: any ) {
    this.confirmationService.confirm( {
      message: 'Esta seguro de eliminar este restaurante?',
      accept: () => {
        this.restaurantService.delete( id ).subscribe( res => {
          this.messagesService.success();
          const list = [ ...this.listRestaurants ];
          this.listRestaurants = [];
          list.splice( list.find( x => x._id === id ), 1 );
          this.listRestaurants = list;
        }, error => {
          this.messagesService.error();
        } );
      }
    } );
  }
}
