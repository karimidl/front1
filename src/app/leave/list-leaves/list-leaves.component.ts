import { Department } from './../../Entities/department';
import { Employee } from './../../employee/list-emplyee/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Entities/leave';
import { LeavesService } from 'src/app/service/leaves.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { DepartmentService } from 'src/app/service/department.service';
import { LeaveType } from 'src/app/Entities/leavetype';
import { LeaveTypeService } from 'src/app/service/leave-type.service';


@Component({
  selector: 'app-list-leaves',
  templateUrl: './list-leaves.component.html',
  styleUrls: ['./list-leaves.component.css']
})
export class ListLeavesComponent implements OnInit {
  public leaves:any[]=[];
  public employees:Employee[];
  public deleteleave:Leave;
  public department:Department;
  public departments:Department[];
  private leaveTypes:LeaveType[];

  selectedLeave:Leave;

  constructor(private leavesService:LeavesService,private depService:DepartmentService,
              private leaveTypesService:LeaveTypeService,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getemployees();
    //this.getLeaveType();
   // this.getLeaves();
  }
 public getDep():void{
    this.depService.getDepartment().subscribe(
      (response:Department[])=>{
        console.log(response);
       // this.department=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  /*public getLeaves():void{
    this.leavesService.getLeaves().subscribe(
      (response:Leave[])=>{
        //console.log(response);
        this.leaves=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }*/
  public getemployees():void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        console.log(response);
        this.employees=response;
        let tablelist:any=[];
        this.employees.map((employee)=>{

          employee.leaves.map((leave)=>{
            let newleave:any=leave;
            newleave.department=employee.department;
            newleave.matricule=employee.matricule;
            tablelist.push(newleave)
          })


        })
        this.leaves.push(...tablelist);
        console.log("this.leaves",this.leaves)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

public onDeleteLeave(id:number):void{
  this.leavesService.deleteLeaves(id).subscribe(
      (response:void)=>{
        console.log(response);
        //this.getLeaves();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  );

    }
/*public onOpenModal(leave:Leave,mode:String):void{
  const btn=document.createElement('button');

  btn.setAttribute('data-toggle','modal');
  if(mode==='delete'){
    this.deleteleave=leave;
  }
  btn.click();
}*/


public getLeaveType():void{
  this.leaveTypesService.getLeaveType().subscribe(
    (response:LeaveType[])=>{
      console.log(response);
      this.leaveTypes=response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }
























}
