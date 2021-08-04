import { NgForm } from '@angular/forms';
import { Employee } from './../../employee/list-emplyee/employee';
import { Leave } from 'src/app/Entities/leave';
import { Component, OnInit } from '@angular/core';
import { LeavesService } from 'src/app/service/leaves.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-leaves',
  templateUrl: './add-leaves.component.html',
  styleUrls: ['./add-leaves.component.css']
})
export class AddLeavesComponent implements OnInit {
  public leave:Leave;
  public employee:Employee;
  id;

  constructor(private leavesService:LeavesService,
              private employeeService:EmployeeService,
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
  }
public onAddLeave(addForm:NgForm){
  addForm.value["employee"]={id:this.id};
  console.log(addForm.value);
  this.leavesService.addLeaves(addForm.value).subscribe(
    (response:Leave)=>{
      console.log(response);
      this.leave=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);

    }
  )
}

}
