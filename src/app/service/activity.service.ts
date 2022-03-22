import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url + '/activities');
  }

  deleteActivity(name: string): Observable<string> {
    return this.http.delete(this.url + '/activities/' + name, {responseType: 'text'})
  }

  addActivity(activity: Activity): Observable<string> {
    return this.http.post(this.url + '/activities', activity, {responseType: 'text'}) ;
  }

  getActivity(name: string): Observable<Activity> {
    return this.http.get<Activity>(this.url + '/activities/' + name);
  }

  editActivity(name: string, activity: Activity): Observable<string> {
    return this.http.put(this.url + '/activities/' + name, activity, {responseType: 'text'});
  }
}