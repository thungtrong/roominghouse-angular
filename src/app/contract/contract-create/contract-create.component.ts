import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from 'src/app/model/Contract';
import { Employee } from 'src/app/model/Employee';
import { Tenant } from 'src/app/model/Tenant';
import { ContractService } from 'src/app/service/contract.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contract: Contract =  {tenant: {}, employee: {}, createDate: new Date()};
  tenants: Tenant[] = [];
  employees: Employee[] = [];
  selectedTenant: string = 'null';
  selectedEmployee: string = 'null';

  constructor(private contractService: ContractService,
              private tenantService: TenantService,
              private employeeService: EmployeeService,
              private router: Router) {    
   }

  ngOnInit(): void {
    this.tenantService.getTenantList(0).subscribe({
      next: (data) => {
        this.tenants = data.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.employeeService.getEmployeeList(0).subscribe({
      next: (data) => {
        this.employees = data.content;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private saveContract(contract: Contract)
  {
    contract.employee = JSON.parse(this.selectedEmployee);
    contract.tenant = JSON.parse(this.selectedTenant);
    console.log(this.contract);
    this.contractService.createContract(contract).subscribe(
      {
        next: (data) => {
          this.goBack();
        },
        error: err => console.log(err)
      }
    );
  }

  goBack()
  {
    this.router.navigate(['/contract']);
  }

  onSubmit(): void {
    this.saveContract(this.contract);
  }
  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }

  parseCreateDate(target: any)
  {
    
    if (target.value)
      this.contract.createDate = new Date(target.value);
    else
      this.contract.createDate = undefined;
  }

  parseStartDate(target: any)
  {
    
    if (target.value)
      this.contract.startDate = new Date(target.value);
    else
      this.contract.startDate = undefined;
  }
  parseEndDate(target: any)
  {
    
    if (target.value)
      this.contract.endDate = new Date(target.value);
    else
      this.contract.endDate = undefined;
  }
}
