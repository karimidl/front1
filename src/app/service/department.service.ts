import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department } from '../Entities/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiBaseUrl=environment.apiBasUrl;
  constructor(private http:HttpClient) { }

  public getDepartment():Observable<Department[]>{
    return this.http.get<Department[]>(this.apiBaseUrl+'department/all');
  }
}
