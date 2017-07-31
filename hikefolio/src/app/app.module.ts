import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Services */
import { ActivityService } from './services/activity/activity.service'

/* Components */
import { AppComponent } from './app.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
