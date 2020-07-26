import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { IdentificationComponent } from './identification/identification.component';
import { DegreeComponent } from './degree/degree.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {
    path: '',  
    data: {
      title: 'Quản lý nhân viên'
    },
    children: [
      { 
        path: 'danh-sach-nhan-vien', 
        component: EmployeeListComponent,
        data: {
          title: 'Danh sách nhân viên'
        },
      },
      { 
        path: 'thong-tin-co-ban', 
        component: BasicInfoComponent,
        data: {
          title: 'Thông tin cơ bản'
        },
      },
      { 
        path: 'giay-to-tuy-than', 
        component: IdentificationComponent,
        data: {
          title: 'Giấy tờ tùy thân'
        },
      },
      { 
        path: 'bang-cap', 
        component: DegreeComponent,
        data: {
          title: 'Bằng cấp'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagermentRoutingModule { }
