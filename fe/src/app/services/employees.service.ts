import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { Observable } from 'rxjs';
import { EmployeeList } from '../models/employee-list';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private apiService: ApiService) { }

  list(): Observable<RootObj<[EmployeeList]>> {
    return this.apiService.get<RootObj<[EmployeeList]>>
      (`${this.apiService.apiUrl.employees.home}`);
  }

}
