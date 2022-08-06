import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  tableHeaders: string[] = ['Tên', 'Giới Tính', 'Số Điện Thoại', 'Email', 'CMND/CCCD', 'Quê Quán', ''];
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllEmployees(0);
  }

  
  getAllEmployees(page: number)
  {
    this.employeeService.getEmployeeList(page).subscribe({
      next: (data) => 
      {
        this.employees = data.content;
      },
      error: (error) => console.log(error)
    })
  }

  deleteEmployee(employee: Employee){
    let choose = confirm(`Are you sure you want to delete this employee`);
    if (choose) {
      this.employeeService.deleteEmployee(employee).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }
}
