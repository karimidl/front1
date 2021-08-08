import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LeaveType } from '../Entities/leavetype';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  private apiServerUrl=environment.apiBasUrl;

  constructor(private http:HttpClient) { }

  public getLeaveType():Observable<LeaveType[]>{
    return this.http.get<LeaveType[]>(this.apiServerUrl+'leaveType/all');
  }
}
