import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {Employee} from '../../../models/employee';
import {Job} from '../../../models/job';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import {ExcelService} from '../../../services/excel.service';
import { EmployeesService } from '../../../services/employees.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  @ViewChild('addModal', { static: false }) addModal: ModalDirective;
  @ViewChild('materialModal', { static: false }) materialModal: ModalDirective;

  columns = [
    { name: 'Họ', prop: 'firstName', sortTable: true },
    { name: 'Tên', prop: 'lastName', sortTable: true },
    { name: 'Lương cơ bản',prop: 'salary', sortTable: true },
    { name: 'Email',prop: 'email', sortTable: true },
  ];
  employees: Employee[] = [];
  employee: Employee = {} as Employee;
  img: any = 'https://screenshotlayer.com/images/assets/placeholder.png';
  imgName: string = 'Choose file';
  public imagePath;
  public job: any;
  choosedEmp: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber:'',
    image: 'https://screenshotlayer.com/images/assets/placeholder.png',
    IDCard: '',
    Hire_Date: null,
    email: '',
    address: '',
    salary: 0, 
    commission: 0,
    active:1, 
    Manager_ID: null,
    deparment:1
};




  constructor(private http: HttpClient, private excelService: ExcelService, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.loadEmployee();

  }
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  loadEmployee() {
    this.http.get<any>('../../../../assets/job.json')
    .subscribe((res) => {
      this.job = res.job;
    });
    this.employeesService.list().subscribe(res => {
      this.employees = res;
      console.log(res);
      console.log(this.employees);
  });
      console.log(this.employees);
  };

  showAddModal(id) {
    console.log('id', id);
    if(id){
      this.employeesService.getEmpById(id).subscribe(res => {
        this.employee = res;
      });
      this.employee.id = id;
    }

    console.log('employee',this.employee);
    this.addModal.show();
  }

  hideModal() {
    this.imgName = 'Choose file';
    this.img = 'https://screenshotlayer.com/images/assets/placeholder.png';
    this.addModal.hide();
}

exportAsXLSX() {
  this.excelService.exportAsExcelFile(this.employees, 'DSNV');
}

choose(row){
  this.choosedEmp = row;
  console.log(this.choosedEmp);
}

save() {
  this.employee.active = 1;
  this.employeesService.save(this.employee).subscribe(res => {
    this.employees.push(res.data);
    this.loadEmployee();
  });
}

preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  this.imgName = files[0].name;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.img = reader.result; 
    
  }


}
}
