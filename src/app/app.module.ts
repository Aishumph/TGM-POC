import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Material Modules
import { MatIconModule  } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import{ MatButtonModule} from '@angular/material/button';
import{MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileComponent } from './file/file.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { MaterialModule } from 'src/material/material.module';
import { FloatingPanelsComponent } from './floating-panels/floating-panels.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
// import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

// import { AppComponent } from './app.component';
// import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FileComponent,
    SidenavComponent,
    ContentComponent,
    ContextMenuComponent,
    FloatingPanelsComponent,
    AngularFormsComponent,
    SignupFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    OverlayModule,
 ReactiveFormsModule,
 DragDropModule,
 MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
