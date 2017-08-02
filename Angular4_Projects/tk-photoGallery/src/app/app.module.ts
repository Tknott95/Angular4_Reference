/* Angular Packages */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* Third Party Pkgs */
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

/* CUSTOM PIPES */
import { PhotoFilterPipe } from './pipes/photo-filter.pipe';

/* SERVICES */
import { ImageService } from './services/image.service';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/gallery/images/image-detail/image-detail.component';

/* @AUTHOR tk@trevorknott.io */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    PhotoFilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
