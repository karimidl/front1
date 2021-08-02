import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../list-emplyee/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  public employee:Employee;
  id;

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = params['id'];
      //console.log('Url Id: ', id);
      // console.log('activateRoute : ', this.activatedRoute);
      this.employeeService.getEmployeeById(id).subscribe(
        (response: Employee) => {
          this.employee = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    });
  }



}
