import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/model/Invoice';
import { Employee } from 'src/app/model/Employee';
import { Tenant } from 'src/app/model/Tenant';
import { InvoiceService } from 'src/app/service/invoice.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { TenantService } from 'src/app/service/tenant.service';
import { ServicepriceService } from 'src/app/service/serviceprice.service';
import { ServicePrice } from 'src/app/model/ServicePrice';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  invoice: Invoice =  {tenant:{},employee:{},internet: 1};
  tenants: Tenant[] = [];
  employees: Employee[] = [];
  selectedTenant: string = 'null';
  selectedEmployee: string = 'null';
  servicePrice: ServicePrice = {id: 1,
    electric: 1,
    water: 1,
    internet: 1};

  constructor(private invoiceService: InvoiceService,
              private tenantService: TenantService,
              private employeeService: EmployeeService,
              private servicePriceService: ServicepriceService,
              private router: Router,
              ) {    
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
    this.servicePriceService.getServicePrice().subscribe({
      next: (data) => {
        this.servicePrice = data;
        this.invoice.internetCost = data.internet;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  private saveInvoice(invoice: Invoice)
  {
    invoice.employee = JSON.parse(this.selectedEmployee);
    invoice.tenant = JSON.parse(this.selectedTenant);
    console.log(this.invoice);
    this.invoiceService.createInvoice(invoice).subscribe(
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
    this.router.navigate(['/invoice']);
  }

  onSubmit(): void {
    this.saveInvoice(this.invoice);
  }

  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }
  
  updateElectricCost(electric: number)
  {
    this.invoice.electric = electric;
    this.invoice.electricCost = electric ? electric * this.servicePrice.electric : 0;
  }

  updateWaterCost(water: number)
  {
    this.invoice.water = water;
    this.invoice.waterCost = water ? water * this.servicePrice.water : 0;
  }

  updateInternetCost(internet: number)
  {
    this.invoice.internet = internet;
    this.invoice.internetCost = internet ? internet * this.servicePrice.internet : 0;
  }

  getTotal() {
    let sum = 0;
    if (typeof(this.invoice) !== "undefined"){
        sum += this.invoice.electricCost ? this.invoice.electricCost : 0;
        sum += this.invoice.internetCost ? this.invoice.internetCost : 0;
        sum += this.invoice.waterCost ? this.invoice.waterCost : 0;
        sum += this.invoice.otherCost ? this.invoice.otherCost : 0;
    }
    return sum;
  }

}
