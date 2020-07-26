import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { EmployeeList } from '../../../models/employee-list';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : EmployeeList[] = [];
  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeesService.list().subscribe(res => {
        this.employees = res;
        console.log(res);
        console.log(this.employees);
    });
  };

}
