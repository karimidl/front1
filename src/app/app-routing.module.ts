
import { ListEmplyeeComponenet } from './employee/list-emplyee/list-emplyee.component';
import { AddEmplyeeComponent } from './employee/add-emplyee/add-emplyee.component';
import { EditEmplyeeComponent } from './employee/edit-emplyee/edit-emplyee.component';
import { ArchivedEmplyeeComponent } from './employee/archived-emplyee/archived-emplyee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { ListLeavesComponent } from './leave/list-leaves/list-leaves.component';
import { InfoLeaveComponent } from './leave/info-leave/info-leave.component';
import { AddLeavesComponent } from './leave/add-leaves/add-leaves.component';

const routes: Routes = [
  {
    path: 'addEmplyee',
    component: AddEmplyeeComponent,
  },
  {
    path: 'editEmplyee/:id',
    component: EditEmplyeeComponent,
  },
  {
    path: 'archivedEmplyee',
    component: ArchivedEmplyeeComponent,
  },
  {
    path: 'listEmplyee',
    component: ListEmplyeeComponenet,
  },
  {
    path:'employeeInfo/:id',
    component:EmployeeInfoComponent
  },
  {
    path:'listleaves',
    component:ListLeavesComponent
  },
  {
    path:'infoleave/:id',
    component:InfoLeaveComponent
  },
  {
    path:'addleave',
    component:AddLeavesComponent
  },
  {
    path: '',
    redirectTo: '/listEmplyee',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
