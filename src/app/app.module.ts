import { ArchivedEmplyeeComponent } from './employee/archived-emplyee/archived-emplyee.component';
import { EmployeeService } from './service/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmplyeeComponent } from './employee/add-emplyee/add-emplyee.component';
import { ListEmplyeeComponenet } from './employee/list-emplyee/list-emplyee.component';
import { EditEmplyeeComponent } from './employee/edit-emplyee/edit-emplyee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClickDirective } from './click.directive';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';

import { EditLeavesComponent } from './leave/edit-leaves/edit-leaves.component';
import { DeleteLeaveComponent } from './leave/delete-leave/delete-leave.component';
import { ListLeavesComponent } from './leave/list-leaves/list-leaves.component';
import { AddLeavesComponent } from './leave/add-leaves/add-leaves.component';
import { InfoLeaveComponent } from './leave/info-leave/info-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmplyeeComponent,
    EditEmplyeeComponent,
    ListEmplyeeComponenet,
    ArchivedEmplyeeComponent,
    ClickDirective,
    EmployeeInfoComponent,
    ListLeavesComponent,
    AddLeavesComponent,
    EditLeavesComponent,
    DeleteLeaveComponent,
    InfoLeaveComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
