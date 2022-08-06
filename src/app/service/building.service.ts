import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../model/Building';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private apiUrl: string = "http://localhost:8081/api/building";
  
  constructor(private httpClient: HttpClient) { }

  public getBuildingList(page: number): Observable<Page<Building>>
  {
    return this.httpClient.get<Page<Building>>(`${this.apiUrl}/list?page=${page}`);
  }

  public getAllBuilding(): Observable<Building[]>
  {
    return this.httpClient.get<Building[]>(`${this.apiUrl}/all`);
  }

  public createBuilding(building: Building): Observable<Building>
  {
    return this.httpClient.post<Building>(`${this.apiUrl}/add`, building);
  }

  public getBuildingById(id: number): Observable<Building>
  {
    return this.httpClient.get<Building>(`${this.apiUrl}/find/${id}`);
  }

  public updateBuilding(building: Building): Observable<Building>
  {
    return this.httpClient.put<Building>(`${this.apiUrl}/update`, building);
  }

  public deleteBuilding(building: Building): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${building.id}`);
  }
}
