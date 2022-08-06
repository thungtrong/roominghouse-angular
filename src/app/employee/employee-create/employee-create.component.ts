import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee =  {gender: true};
  constructor(private employeeService: EmployeeService,
              private router: Router,
              ) {    
   }

  ngOnInit(): void {
  }

  private saveEmployee(employee: Employee)
  {
    this.employeeService.createEmployee(employee).subscribe(
      {
        next: (data) => {
          // console.log(data);
          this.goToEmployeeList();
        },
        error: err => {
          console.log(err);
          alert("Xin hãy nhập đầy đủ thông tin");
        }
      }
    );
  }

  stringify(obj :Object) {
    return JSON.stringify(obj);
  }

  private goToEmployeeList()
  {
    this.router.navigate(['/employee']);
  }

  onSubmit(): void {
    this.saveEmployee(this.employee);
  }

  goBack()
  {
    this.router.navigate(['/employee']);
  }
}
