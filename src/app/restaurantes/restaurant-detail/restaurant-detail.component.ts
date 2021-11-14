import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestaurantInterface } from '../../_models/restaurant.interface';

@Component( {
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: [ './restaurant-detail.component.scss' ]
} )
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant!: RestaurantInterface|undefined;
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.dismiss.emit( false );
  }
}
