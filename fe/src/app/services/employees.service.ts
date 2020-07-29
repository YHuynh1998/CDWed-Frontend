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

  save(data: Employee): Observable<RootObj<Employee>> {
    if (!data.id) {
      return this.apiService.post<RootObj<Employee>>(this.apiService.apiUrl.employees.home, data);
    } else {
      return this.apiService.put<RootObj<Employee>>(`${this.apiService.apiUrl.employees.home}/${data.id}`, data);
    }
  }

  getEmpById(id: Number): Observable<RootObj<Employee>> {
    return this.apiService.getID<RootObj<Employee>>
      (`${this.apiService.apiUrl.employees.getEmp}/${id}`, id);
  }

}
