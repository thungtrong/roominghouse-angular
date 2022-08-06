import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  invoice: Invoice =  {tenant:{},employee:{},internet: 1};

  constructor(private invoiceService: InvoiceService,

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
        this.invoice = data;
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  goBack()
  {
    this.router.navigate(['/invoice']);
  }


  stringify(obj: Object): string {
    return JSON.stringify(obj);
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
