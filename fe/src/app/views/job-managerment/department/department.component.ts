import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  constructor() { }

  ngOnInit(): void {
  }

  showAddModal() {
    this.editModal.show();
  }

  deparmentForm = new FormGroup({
    name: new FormControl(''),
    bio: new FormControl(''),
    workingTimeDetails: new FormArray([]),
  });

}
