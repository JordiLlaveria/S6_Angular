import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Activity } from 'app/models/activity';
import { ActivityService } from 'app/service/activity.service';

@Component({
  selector: 'app-crear-activity',
  templateUrl: './crear-activity.component.html',
  styleUrls: ['./crear-activity.component.css']
})
export class CrearActivityComponent implements OnInit {

  activityForm: FormGroup;
  title = "Crear Actiivty";
  name: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _activityService: ActivityService,
              private aRouter: ActivatedRoute) { 
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      language: ['', Validators.required],
    });
    
    this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  ngOnInit(): void {
    this.editActivity();
  }

  addActivity() {
    const activity: Activity = {
      name: this.activityForm.get('name')?.value,
      description: this.activityForm.get('description')?.value,
      language: this.activityForm.get('language')?.value,
    }

    if(this.name !== null){
      // Edit user
      this._activityService.editActivity(this.name, activity).subscribe(data => {
        this.toastr.info('La activitat ha estat editat amb exit!', 'Activitat editada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.activityForm.reset();
      })
    }
    else {
      // Add user
      console.log(activity);
      this._activityService.addActivity(activity).subscribe(data => {
        this.toastr.success('La activitat ha estat creada amb exit!', 'Activitat creada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.activityForm.reset();
      })
    }
  }

  editActivity() {
    if(this.name !== null) {
      this.title = 'Editar user';
      this._activityService.getActivity(this.name).subscribe(data => {
        this.activityForm.setValue({
          name: data.name,
          description: data.description,
          language: data.language,
        })
      })
    }
  }

}
