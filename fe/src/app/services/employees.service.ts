import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { Observable } from 'rxjs';
import { EmployeeList } from '../models/employee-list';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private apiService: ApiService) { }

  list(): Observable<RootObj<[Employee]>> {
    return this.apiService.get<RootObj<[Employee]>>
      (`${this.apiService.apiUrl.employees.home}`);
  }

}
