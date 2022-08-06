import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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

  
  stringify(obj :Object) {
    return JSON.stringify(obj);
  }

  private goToEmployeeList()
  {
    this.router.navigate(['/employee']);
  }

  goBack()
  {
    this.router.navigate(['/employee']);
  }

}
