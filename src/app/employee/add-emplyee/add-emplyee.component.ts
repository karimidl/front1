import { Employee } from '../list-emplyee/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../../service/employee.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newemp',
  templateUrl: './add-emplyee.component.html',
  styleUrls: ['./add-emplyee.component.css']
})
export class AddEmplyeeComponent implements OnInit {

  public employees: Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public onAddEmployee(addForm: NgForm){
    console.log("testttt")
    console.log(addForm.value)
    this.employeeService.addEmployees(addForm.value).subscribe(
      (response:Employee)=>{
        console.log(response);
        this.getEmployees();

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);

      }
    );
  }
   /* saveemployee(){
      this.employeeService.addEmployees().subscribe(
        (response:Employee)=>{
          console.log(response);
          this.getEmployees();

        },
        (error:HttpErrorResponse)=>{
          alert(error.message);

        }
      )
    }*/
 /* public onAddEmployee(){
    console.log('hi');
  }*/
}
