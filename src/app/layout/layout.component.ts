import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef, Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
} )
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild( 'content' ) content: ElementRef | undefined;
  hasContent!: boolean;
  @ViewChild( 'menu' ) menu: ElementRef | undefined;
  hasMenu!: boolean;
  @ViewChild( 'header' ) header: ElementRef | undefined;
  hasHeader!: boolean;

  @Input()
  usuario: any;
  @Input()
  positivaWebServer!: string;
  @Input()
  ramo!: string;
  @Input()
  menusList: any[] = [];

  constructor(private changeRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.hasContent = !!( this.content && this.content.nativeElement.innerHTML.trim().length > 0 );
    this.hasMenu = !!( this.menu && this.menu.nativeElement.innerHTML.trim().length > 0 );
    this.hasHeader = !!( this.header && this.header.nativeElement.innerHTML.trim().length > 0 );
    this.changeRef.detectChanges();
  }

}
