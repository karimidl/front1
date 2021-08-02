import { ActivatedRoute } from '@angular/router';
import { LeavesService } from './../../service/leaves.service';
import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Entities/leave';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-info-leave',
  templateUrl: './info-leave.component.html',
  styleUrls: ['./info-leave.component.css']
})
export class InfoLeaveComponent implements OnInit {
  public leave:Leave[];
  id;

  constructor(private leavesService:LeavesService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      const id=params['id'];
      this.id=params['id'];
      console.log('Url Id: ', id);
      this.leavesService.getLeaveEmployeeById(id).subscribe(
        (response: Leave[]) => {
          console.log(response);
          //console.log(Leave.id);
          this.leave=response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }

    );
  }

}
