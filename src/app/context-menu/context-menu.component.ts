import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {OverlayModule} from '@angular/cdk/overlay';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContextMenuComponent {
  displayedColumns: string[] = ['airline','Departure',  'Arrival', 'Itinerary'];
  //dataSource = ELEMENT_DATA;
  isOpen = false;
  openMenu: boolean = false;
  isOver = false;
  expandedElement!:element|null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  dataSource = new MatTableDataSource<element>(ELEMENT_DATA);

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  contextMenuPosition = { x: '0px', y: '0px' };
  clickevent(event : any){console.log("clickevent" , event);
  }


  onContextMenu(event: MouseEvent, item:element ) {
    event.preventDefault();
    console.log("event",event,item);

    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(item: element) {
    alert(`AIRLINE : ${item.airline} DEPARTURE : ${item.Departure} ITINERARY:${item.Itinerary}`);
  }

  onContextMenuAction2(item: element) {
    alert(`Click on Action 2 for ${item.airline}`);
  }
  clickedRows = new Set<element>();


  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  hello(mex: string){
      alert('Hello '+mex+'!' );
  }

}
export interface element {
  Departure: string;
  airline: string;
  Arrival: string;
  Itinerary: string;
}

const ELEMENT_DATA: element[] = [
  {airline: 'DL', Departure: 'SUN', Arrival:'SUN' , Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'SUN', Arrival:'SUN', Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'MON', Arrival:'MON', Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'TUE', Arrival: 'TUE', Itinerary: 'ATL DCA'},
  {airline: 'DL', Departure: 'WED', Arrival: 'WED', Itinerary: 'ATL DTW DCA'},

];
