import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity/activity.service';

@Component({
  selector: 'tk-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities: IActivity[];
  totalActivities: number
  totalDistance: number
  firstDate: Date

  constructor(private _activityService: ActivityService) { 

  }

  ngOnInit() {
    this.activities = this._activityService.getActivites();
  
    this.totalActivities = this._activityService.getTotalActivities(this.activities);
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.firstDate = this._activityService.getFirstDate(this.activities);
  }

}
