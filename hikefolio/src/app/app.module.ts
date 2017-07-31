import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router'
import { routes } from './routes';

/* Services */
import { ActivityService } from './services/activity/activity.service'
import { MapService } from './services/map/map.service'


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
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ActivityService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
