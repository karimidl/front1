import { Employee } from './../../employee/add-emplyee/employee';
import { ActivatedRoute } from '@angular/router';
import { LeavesService } from './../../service/leaves.service';
import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Entities/leave';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-info-leave',
  templateUrl: './info-leave.component.html',
  styleUrls: ['./info-leave.component.css']
})
export class InfoLeaveComponent implements OnInit {
  public leaves:Leave;
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
          console.log(response.leaves);

          // this.employees=response;

          ///this.leaves=response.leaves;
          this.employee = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }

    );
  }

}
