import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Leave } from '../Entities/leave';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {
private apiServerUrl=environment.apiBasUrl;

  constructor(private http:HttpClient) { }

  public getLeaves(): Observable<Leave[]>{
    return this.http.get<Leave[]>(this.apiServerUrl+'conje/all');
  }
public addLeaves(leave:Leave):Observable<Leave>{
  return this.http.post<Leave>(this.apiServerUrl+'conje/add',leave);
}
public updateLeaves(leave:Leave):Observable<Leave>{
  return this.http.put<Leave>(this.apiServerUrl+'conje/update',leave);
}
public deleteLeaves(leaveid:number):Observable<void>{
  return this.http.delete<void>(this.apiServerUrl+'conje/delete/'+leaveid);

}
public getLeaveEmployeeById(id:number):Observable<Leave[]>{
  return this.http.get<Leave[]>(this.apiServerUrl+'conje/employee/'+id);
}
}
