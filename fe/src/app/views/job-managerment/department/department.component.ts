import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Department } from '../../../models/department';
import { HttpClient } from '@angular/common/http';
import { DeparmentService } from '../../../services/deparment.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  @ViewChild('materialModal', { static: false }) materialModal: ModalDirective;
  departments: Department[] = [];
  department: Department = {} as Department;
  public employee: any;
  img: any = 'https://screenshotlayer.com/images/assets/placeholder.png';
  imgName: string = 'Choose file';

  columns = [
    { name: 'Phòng ban', prop: 'name', sortTable: true },
    { name: 'Địa chỉ', prop: 'locationId', sortTable: true },
  ];

  choosedDept: Department = {
    id: 0,
    name: '',
    locationId: '',
  };
  constructor(private http: HttpClient, private departmentService: DeparmentService) { }

  ngOnInit(): void {
    this.loadDepartment();
  }
  loadDepartment() {
    this.http.get<any>('../../../../assets/job.json')
      .subscribe((res) => {
        this.employee = res.job;
      });
    this.departmentService.list().subscribe(res => {
      this.departments = res.data;
      console.log(res);
      console.log("tesssss"+this.departments);
    });
    console.log(this.departments);
  };

  choose(row) {
    this.choosedDept = row;
    console.log(this.choosedDept);
  }

  showAddModal() {
    this.editModal.show();
  }

  hideModal() {
    this.imgName = 'Choose file';
    this.img = 'https://screenshotlayer.com/images/assets/placeholder.png';
    this.editModal.hide();
  }

  deparmentForm = new FormGroup({
    name: new FormControl(''),
    bio: new FormControl(''),
    workingTimeDetails: new FormArray([]),
  });

}