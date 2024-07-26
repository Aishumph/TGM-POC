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
import { PopupComponent } from './popup/popup.component';
import { CardSkeletonComponent } from './card-skeleton/card-skeleton.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    SidenavComponent,
    ContentComponent,
    ContextMenuComponent,
    PopupComponent,
    CardSkeletonComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
