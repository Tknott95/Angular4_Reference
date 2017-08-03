/* Base Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Services */
import { ImageService } from './services/image/image.service';

/* Components */
import { AppComponent } from './app.component';
import { ImgListComponent } from './components/img-list/img-list.component';

import 'hammerjs';

import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import { TopNavComponent } from './components/layouts/top-nav/top-nav.component';

/* @AUTHOR tk@trevorknott.io */
@NgModule({
  declarations: [
    AppComponent,
    ImgListComponent,
    TopNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    MasonryModule,
    MaterialModule
  ],
  providers: [
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
