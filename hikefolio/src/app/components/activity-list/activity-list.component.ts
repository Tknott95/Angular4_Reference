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
  totalActivites: number
  totalDistance: number

  constructor(private _activityService: ActivityService) { 

  }

  ngOnInit() {
  }

}
