import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../model/Invoice';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl: string = "http://localhost:8081/api/invoice";
  
  constructor(private httpClient: HttpClient) { }

  public getInvoiceList(page: number): Observable<Page<Invoice>>
  {
    return this.httpClient.get<Page<Invoice>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createInvoice(room: Invoice): Observable<Invoice>
  {
    return this.httpClient.post<Invoice>(`${this.apiUrl}/add`, room);
  }

  public getInvoiceById(id: number): Observable<Invoice>
  {
    return this.httpClient.get<Invoice>(`${this.apiUrl}/find/${id}`);
  }

  public updateInvoice(room: Invoice): Observable<Invoice>
  {
    return this.httpClient.put<Invoice>(`${this.apiUrl}/update`, room);
  }

  public deleteInvoice(room: Invoice): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${room.id}`);
  }
}
