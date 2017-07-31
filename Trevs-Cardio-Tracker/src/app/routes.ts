import { Routes } from "@angular/router"
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
  { path: "runs", component: ActivityListComponent },
  { path: "run/:id", component: MapComponent },
  { path: "", redirectTo: "/runs", pathMatch: 'full' }
]