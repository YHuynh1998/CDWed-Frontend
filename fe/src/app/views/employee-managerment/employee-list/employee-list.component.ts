import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { EmployeeList } from '../../../models/employee-list';
import { Paging } from '../../../models/paging';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  employees : EmployeeList[] = [];
  paging = { page: 0} as Paging;

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });
  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeesService.list().subscribe(res => {
        this.employees = res.data;
        console.log(res);
        console.log(this.employees);
    });
  };

  openAdd() {
    this.editModal.show();
  }

}
