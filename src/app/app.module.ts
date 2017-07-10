import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';

import { ImageService } from './image/shared/image-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
