import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicePrice } from '../model/ServicePrice';

@Injectable({
  providedIn: 'root'
})
export class ServicepriceService {
  private apiUrl: string = "http://localhost:8081/api/serviceprice";

  constructor(private httpClient: HttpClient) { }

  public getServicePrice(): Observable<ServicePrice>
  {
    return this.httpClient.get<ServicePrice>(`${this.apiUrl}`);
  }

  public updateServicePrice(obj: ServicePrice): Observable<ServicePrice>
  {
    return this.httpClient.put<ServicePrice>(`${this.apiUrl}/update`, obj);
  }
}
