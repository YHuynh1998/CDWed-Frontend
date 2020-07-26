import {Department} from './department';

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    salary: number;
    active: number;
    image: string;
    IDCard: string;
    Hire_Date: Date;
    address: string;
    commission: number;
    Manager_ID: number;
    Department_ID: Department;
}