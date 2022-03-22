import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Activity } from 'app/models/activity';
import { ActivityService } from 'app/service/activity.service';

@Component({
  selector: 'app-listar-activities',
  templateUrl: './listar-activities.component.html',
  styleUrls: ['./listar-activities.component.css']
})
export class ListarActivitiesComponent implements OnInit {
  listActivities: Activity[] = [];

  constructor(private _activityService: ActivityService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getActivities()
  }

  getActivities() {
    this._activityService.getActivities().subscribe(data => {
      console.log(data);
      this.listActivities = data;
    }, error => {
      console.log(error);
    })
  }

  deleteActivity(name: string) {
    this._activityService.deleteActivity(name).subscribe(data => {
      this.toastr.error('La activity ha estat eliminat amb exit', 'Activity eliminat');
      this.getActivities();
    }, error => {
      console.log(error);
    })
  }

}
