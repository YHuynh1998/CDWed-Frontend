import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RootObj } from '../models/root-obj';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DeparmentService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Department]>> {
    return this.apiService.get<RootObj<[Department]>>
      (`${this.apiService.apiUrl.departments.home}`);
  }
  save(data: Department): Observable<RootObj<Department>> {
    if (!data.id) {
      return this.apiService.post<RootObj<Department>>(this.apiService.apiUrl.departments.home, data);
    } else {
      return this.apiService.put<RootObj<Department>>(`${this.apiService.apiUrl.departments.home}/${data.id}`, data);
    }
  }
  getDeptById(id: Number): Observable<RootObj<Department>> {
    return this.apiService.getID<RootObj<Department>>
      (`${this.apiService.apiUrl.departments.getDept}/${id}`, id);
  }
}