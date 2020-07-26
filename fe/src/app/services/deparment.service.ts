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
      (`${this.apiService.apiUrl.deparments.home}`);
  }
}