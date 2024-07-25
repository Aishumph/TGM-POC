import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DraggableDialogComponent } from '../draggable-dialog/draggable-dialog.component';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DraggableDialogComponent, {
      width: '400px'
    });
  }
}




