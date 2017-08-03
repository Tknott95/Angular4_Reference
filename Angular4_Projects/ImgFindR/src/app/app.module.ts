import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Services */
import { ImageService } from './services/image/image.service';

import { AppComponent } from './app.component';
import { ImgListComponent } from './components/img-list/img-list.component';

/* @AUTHOR tk@trevorknott.io */
@NgModule({
  declarations: [
    AppComponent,
    ImgListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
