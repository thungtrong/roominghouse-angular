import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee =  {gender: true};
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activated: ActivatedRoute) {    
   }

  ngOnInit(): void {
    let id = this.activated.snapshot.params['id'];
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        if (data===null) {
          alert('Employee not found');
          this.router.navigate(['/employee']);
        }
        this.employee = data;
      }
    })
  }

  private saveEmployee(employee: Employee)
  {
    
    this.employeeService.updateEmployee(employee).subscribe(
      {
        next: (data) => {
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
