import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintenance } from '../model/Maintenance';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private apiUrl: string = "http://localhost:8081/api/maintenance";
  
  constructor(private httpClient: HttpClient) { }

  public getMaintenanceList(page: number): Observable<Page<Maintenance>>
  {
    return this.httpClient.get<Page<Maintenance>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createMaintenance(maintenance: Maintenance): Observable<Maintenance>
  {
    return this.httpClient.post<Maintenance>(`${this.apiUrl}/add`, maintenance);
  }

  public getMaintenanceById(id: number): Observable<Maintenance>
  {
    return this.httpClient.get<Maintenance>(`${this.apiUrl}/find/${id}`);
  }

  public updateMaintenance(maintenance: Maintenance): Observable<Maintenance>
  {
    return this.httpClient.put<Maintenance>(`${this.apiUrl}/update`, maintenance);
  }

  public deleteMaintenance(maintenance: Maintenance): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete`, {body:maintenance});
  }
}
