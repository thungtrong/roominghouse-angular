import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  
  tableHeaders: string[] = ['Tên', 'Người Thuê', 'Nhân Viên', 'Trạng Thái', ''];
  invoices: Invoice[] = [];
  constructor(
    private invoiceService: InvoiceService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllInvoices(0);
  }

  getTotal(invoice: Invoice) {
    let sum = 0;
    if (typeof(invoice) !== "undefined"){
        sum += invoice.electricCost ? invoice.electricCost : 0;
        sum += invoice.internetCost ? invoice.internetCost : 0;
        sum += invoice.waterCost ? invoice.waterCost : 0;
        sum += invoice.otherCost ? invoice.otherCost : 0;
    }
    return sum;
}

  getAllInvoices(page: number)
  {
    this.invoiceService.getInvoiceList(page).subscribe({
      next: (data) => 
      {
        this.invoices = data.content;
      },
      error: (error) => console.log(error)
    })
  }

  deleteInvoice(invoice: Invoice){
    let choose = confirm(`Bạn có chắc muốn xoá hoá đơn này?`);
    if (choose) {
      this.invoiceService.deleteInvoice(invoice).subscribe({
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
