import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';

/* @AUTHOR tk@trevorknott.io */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
