import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { TabsetComponent } from "ngx-bootstrap/tabs";
import { Department } from "../../../models/department";
import { HttpClient } from "@angular/common/http";
import { DeparmentService } from "../../../services/deparment.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  @ViewChild("staticTabs", { static: false }) staticTabs: TabsetComponent;
  @ViewChild("editModal", { static: false }) editModal: ModalDirective;
  @ViewChild("addModal", { static: false }) addModal: ModalDirective;
  @ViewChild("materialModal", { static: false }) materialModal: ModalDirective;
  departments: Department[] = [];
  department: Department = {} as Department;
  // public employee: any;
  img: any = "https://screenshotlayer.com/images/assets/placeholder.png";
  imgName: string = "Choose file";

  columns = [
    { name: "Phòng ban", prop: "name", sortTable: true },
    { name: "Địa chỉ", prop: "locationId", sortTable: true },
  ];

  choosedDept: Department = {
    id: 0,
    name: "",
    locationId: "",
  };
  constructor(
    private http: HttpClient,
    private departmentService: DeparmentService
  ) { }

  ngOnInit(): void {
    this.loadDepartment();
  }
  loadDepartment() {
    this.http.get<any>("../../../../assets/job.json").subscribe((res) => {
      // this.employee = res.job;
    });
    this.departmentService.list().subscribe((res: any) => {
      this.departments = res;
    });
  }

  choose(row) {
    this.choosedDept = row;
    console.log(this.choosedDept);
  }

  showAddModal() {
    this.addModal.show();
  }
  showEditModal(department) {
      this.department=department;
    this.editModal.show();
    // console.log('id',id)
  }
  hideAddModal() {
    this.imgName = "Choose file";
    this.img = "https://screenshotlayer.com/images/assets/placeholder.png";
    this.addModal.hide();
  }
  hideEditModal() {
    this.imgName = "Choose file";
    this.img = "https://screenshotlayer.com/images/assets/placeholder.png";
    this.editModal.hide();
  }

  save() {
    this.departmentService.save(this.department).subscribe((res) => {
      this.departments.push(res.data);
      this.loadDepartment();
      this.addModal.hide();
      this.editModal.hide();
    });
  }
  alertWithSuccess(){
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      // timer: 1500
    })
  }
}
