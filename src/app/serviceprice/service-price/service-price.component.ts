import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePrice } from 'src/app/model/ServicePrice';
import { ServicepriceService } from 'src/app/service/serviceprice.service';

@Component({
  selector: 'app-service-price',
  templateUrl: './service-price.component.html',
  styleUrls: ['./service-price.component.css']
})
export class ServicePriceComponent implements OnInit {
  disable : boolean = true;
  serviceprice: ServicePrice = {};
  constructor(
    private service: ServicepriceService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.service.getServicePrice().subscribe({
      next: (data) => this.serviceprice = data,
      error: (error) => console.log(error)
    })
  }

  toggelDisable(): void {
    if (this.disable == false) {
      this.service.updateServicePrice(this.serviceprice).subscribe();
    }
    this.disable = !this.disable;
  }

}
