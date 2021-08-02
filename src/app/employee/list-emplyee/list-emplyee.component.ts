import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../add-emplyee/employee';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empl',
  templateUrl: './list-emplyee.component.html',
  styleUrls: ['./list-emplyee.component.css']
})
export class ListEmplyeeComponenet implements OnInit {

  public employees: Employee[];
  public editemployee:Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();

  }
  public getEmployees():void{

    this.employeeService.getActivatedEmplyees().subscribe(
      (response:Employee[])=>{
        console.log(response);
        this.employees=response;

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public archiveEmployee(event?: MouseEvent):void{
    console.log((event.currentTarget as HTMLElement).id);
    this.employeeService.changeEmployeeStatus(Number((event.currentTarget as HTMLElement).id)).subscribe(
    );
    window.location.reload();

  }

  public searchEmployees(key:String):void{
    //console.log(key);
        const res:Employee[] =[];
        for(const employee of this.employees){
          if(employee.nom.toLowerCase().indexOf(key.toLowerCase()) !==-1){
            res.push(employee);
          }
        }
        this.employees=res;
      /* if(res.length == 0 || !key){
         // this.getEmployees();
        //alert('not found');
        }*/
  }

}
