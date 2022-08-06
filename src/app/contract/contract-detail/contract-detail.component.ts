import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/model/Contract';
import { Employee } from 'src/app/model/Employee';
import { Tenant } from 'src/app/model/Tenant';
import { ContractService } from 'src/app/service/contract.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contract: Contract =  {tenant: {}, employee: {}, createDate: new Date()};
  tenants: Tenant[] = [];
  employees: Employee[] = [];
  selectedTenant: string = 'null';
  selectedEmployee: string = 'null';

  constructor(private contractService: ContractService,
              private tenantService: TenantService,
              private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {    
   }

   private convertStringPatternToDate(pattern: any)
   {
      if (typeof(pattern) === 'string'){
          let [year, month, day] = (pattern as string).split('-');
          return new Date(+year, +month-1, +day+1);
        }
        return pattern;
   }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contractService.getContractById(id).subscribe({
      next: (data) => {
        if (data===null) {
          alert('Contract not found');
          this.router.navigate(['/contract']);
        }
        data.createDate = this.convertStringPatternToDate(data.createDate);
        data.startDate = this.convertStringPatternToDate(data.startDate);
        data.endDate = this.convertStringPatternToDate(data.endDate);
        this.contract = data;
        this.selectedEmployee = JSON.stringify(this.contract.employee);
        this.selectedTenant = JSON.stringify(this.contract.tenant);
        
      },
      error: (err) => console.log(err)
    })
  }

  private saveContract(contract: Contract)
  {
    contract.employee = JSON.parse(this.selectedEmployee);
    contract.tenant = JSON.parse(this.selectedTenant);

    this.contractService.updateContract(contract).subscribe(
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

}
