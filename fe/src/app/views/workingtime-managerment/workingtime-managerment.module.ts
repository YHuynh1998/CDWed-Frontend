import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingtimeManagermentRoutingModule } from './workingtime-managerment-routing.module';
import { WorkingtimeComponent } from './workingtime.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { TimeTestComponent } from './time-test/time-test.component'


@NgModule({
  declarations: [WorkingtimeComponent, TimeTestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkingtimeManagermentRoutingModule,
    ModalModule,
    NgxDatatableModule,
  ]
})
export class WorkingtimeManagermentModule { }
