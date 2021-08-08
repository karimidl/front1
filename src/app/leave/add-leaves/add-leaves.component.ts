import { NgForm } from '@angular/forms';
import { Employee } from './../../employee/list-emplyee/employee';
import { Leave } from 'src/app/Entities/leave';
import { Component, OnInit } from '@angular/core';
import { LeavesService } from 'src/app/service/leaves.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LeaveType } from 'src/app/Entities/leavetype';
import { LeaveTypeService } from 'src/app/service/leave-type.service';


@Component({
  selector: 'app-add-leaves',
  templateUrl: './add-leaves.component.html',
  styleUrls: ['./add-leaves.component.css']
})
export class AddLeavesComponent implements OnInit {
  public leave:Leave;
  public employee:Employee;
  public leavetypes:LeaveType[];
  id;

  constructor(private leavesService:LeavesService,
              private employeeService:EmployeeService,
              private leavetypeService:LeaveTypeService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      const id=params['id'];
      this.id=params['id'];
      console.log('Url Id: ', id);
      this.employeeService.getEmployeeById(id).subscribe(
        (response: Employee) => {
          console.log(response);
          this.employee = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    )
    this.getLeaveType()
  }
  public onAddLeave(addForm: NgForm) {
    addForm.value["employee"] = { id: this.id };
    console.log(addForm.value);
    console.log(addForm.value["leaveTypeId"]);
    addForm.value["leaveType"] = { id: addForm.value["leaveTypeId"] };
    console.log(addForm.value)
    this.leavesService.addLeaves(addForm.value).subscribe(
      (response: Leave) => {
        console.log(response.leaveType);
        this.leave = response;
        //addForm.reset();
        //response.typeConje=;
        //response.date_debut=new Date();
        //     //response.date_fin=new Date();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    )
  }
public getLeaveType():void{
this.leavetypeService.getLeaveType().subscribe(
  (response:LeaveType[])=>{
    console.log(response);
    this.leavetypes = response
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);
}

}
