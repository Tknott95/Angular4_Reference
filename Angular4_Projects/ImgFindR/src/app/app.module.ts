/* Base Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Services */
import { ImageService } from './services/image/image.service';

/* Components */
import { AppComponent } from './app.component';
import { ImgListComponent } from './components/img-list/img-list.component';

/* @AUTHOR tk@trevorknott.io */
@NgModule({
  declarations: [
    AppComponent,
    ImgListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
