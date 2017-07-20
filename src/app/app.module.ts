import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';

import { ImageService } from './image/shared/image-service';
import { ImageFilterPipe } from './image/shared/filter-pipe';

import { appRoutes } from "../routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent
  ],
  imports: [
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
