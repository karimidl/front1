import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../list-emplyee/employee';

@Component({
  selector: 'app-archived-emplyee',
  templateUrl: './archived-emplyee.component.html',
  styleUrls: ['./archived-emplyee.component.css']
})
export class ArchivedEmplyeeComponent implements OnInit {

  public employees: Employee[];
  public editemployee:Employee;
  // public id;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getArchivedEmployees();
  }
  public getArchivedEmployees():void{
    this.employeeService.getArchivedEmplyees().subscribe(
      (response:Employee[])=>{
        console.log(response)
        this.employees=response;

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public activateEmplyee(event):void{
    console.log(event.currentTarget );
    this.employeeService.changeEmployeeStatus(Number((event.currentTarget as HTMLElement).id)).subscribe();
    window.location.reload();
  }

}
