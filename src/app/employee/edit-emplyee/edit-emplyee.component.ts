import { Employee } from '../list-emplyee/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../../service/employee.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newemp',
  templateUrl: './edit-emplyee.component.html',
  styleUrls: ['./edit-emplyee.component.css'],
})
export class EditEmplyeeComponent implements OnInit {
  public employee: Employee;
  id

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = params['id'];
      console.log('Url Id: ', id);
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
  public onEditEmployee(editForm: NgForm) {
    editForm.value["id"] = this.id
    console.log(editForm.value);
    this.employeeService.updateEmployees(editForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
