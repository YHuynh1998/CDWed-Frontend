import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkingtimeComponent } from './workingtime.component';
import { TimeTestComponent } from './time-test/time-test.component';


const routes: Routes = [
  {
    path: '',  
    data: {
      title: 'Quản lý thời gian'
    },
    children: [
      { 
        path: 'thoi-gian-lam-viec', 
        component: WorkingtimeComponent,
        data: {
          title: 'Thời gian làm việc'
        },
      },
   
    
      { 
        path: 'time-test', 
        component: TimeTestComponent
       
    
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingtimeManagermentRoutingModule { }
