import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../_models/menu.interface';
import { MenuService } from '../../_services/menu.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.scss' ]
} )
export class MenuComponent implements OnInit {

  menu: MenuInterface[] = [];
  fechaHoraActual: Date = new Date();

  constructor( private menuService: MenuService,
               private router: Router ) {
  }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe( ( res: MenuInterface[] ) => {
      this.menu = res;
    } );
  }

  redirectTo( item: MenuInterface ) {
    this.router.navigate( [ item.url ] );
  }
}
