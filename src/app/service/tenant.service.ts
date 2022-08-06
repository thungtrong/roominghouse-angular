import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Tenant } from '../model/Tenant';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private apiUrl: string = "http://localhost:8081/api/tenant";
  
  constructor(private httpClient: HttpClient) { }

  public getTenantList(page: number): Observable<Page<Tenant>>
  {
    return this.httpClient.get<Page<Tenant>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createTenant(room: Tenant): Observable<Tenant>
  {
    return this.httpClient.post<Tenant>(`${this.apiUrl}/add`, room);
  }

  public getTenantById(id: number): Observable<Tenant>
  {
    return this.httpClient.get<Tenant>(`${this.apiUrl}/find/${id}`);
  }

  public updateTenant(room: Tenant): Observable<Tenant>
  {
    return this.httpClient.put<Tenant>(`${this.apiUrl}/update`, room);
  }

  public deleteTenant(room: Tenant): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${room.id}`);
  }
}
