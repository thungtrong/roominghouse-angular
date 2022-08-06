import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string = "http://localhost:8081/api/employee";
  
  constructor(private httpClient: HttpClient) { }

  public getEmployeeList(page: number): Observable<Page<Employee>>
  {
    return this.httpClient.get<Page<Employee>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createEmployee(room: Employee): Observable<Employee>
  {
    return this.httpClient.post<Employee>(`${this.apiUrl}/add`, room);
  }

  public getEmployeeById(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.apiUrl}/find/${id}`);
  }

  public updateEmployee(room: Employee): Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.apiUrl}/update`, room);
  }

  public deleteEmployee(room: Employee): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${room.id}`);
  }
}
