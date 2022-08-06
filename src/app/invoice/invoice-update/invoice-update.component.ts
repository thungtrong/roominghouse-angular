import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { Invoice } from 'src/app/model/Invoice';
import { ServicePrice } from 'src/app/model/ServicePrice';
import { Tenant } from 'src/app/model/Tenant';
import { EmployeeService } from 'src/app/service/employee.service';
import { InvoiceService } from 'src/app/service/invoice.service';
import { ServicepriceService } from 'src/app/service/serviceprice.service';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-invoice-update',
  templateUrl: './invoice-update.component.html',
  styleUrls: ['./invoice-update.component.css']
})
export class InvoiceUpdateComponent implements OnInit {

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
              private activatedRoute: ActivatedRoute
              ) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.invoiceService.getInvoiceById(id).subscribe({
      next: (data) => {
        if (data == null)
        {
          alert('Invoice not found');
          this.router.navigate(['invoice']);
        }
        console.log(data);
        this.invoice = data;
        this.selectedEmployee = JSON.stringify(this.invoice.employee);
        this.selectedTenant = JSON.stringify(this.invoice.tenant);
      },
      error: (error) => {
        console.log(error);
      }
    });
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

    this.invoiceService.updateInvoice(invoice).subscribe(
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
