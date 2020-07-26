import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobManagermentRoutingModule } from './job-managerment-routing.module';
import { JobInfomationComponent } from './job-infomation/job-infomation.component';
import { DepartmentComponent } from './department/department.component';
import { WorkingScheduleComponent } from './working-schedule/working-schedule.component';
import { JobTestComponent } from './job-test/job-test.component';



@NgModule({
  declarations: [JobInfomationComponent, DepartmentComponent, WorkingScheduleComponent, JobTestComponent],
  imports: [
    CommonModule,
    JobManagermentRoutingModule
  ]
})
export class JobManagermentModule { }
