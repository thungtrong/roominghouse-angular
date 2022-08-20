import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../model/Contract';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl: string = "http://localhost:8081/api/contract";
  
  constructor(private httpClient: HttpClient) { }

  public getContractList(page: number): Observable<Page<Contract>>
  {
    return this.httpClient.get<Page<Contract>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createContract(contract: Contract): Observable<Contract>
  {
    return this.httpClient.post<Contract>(`${this.apiUrl}/add`, contract);
  }

  public getContractById(id: number): Observable<Contract>
  {
    return this.httpClient.get<Contract>(`${this.apiUrl}/find/${id}`);
  }

  public updateContract(contract: Contract): Observable<Contract>
  {
    return this.httpClient.put<Contract>(`${this.apiUrl}/update`, contract);
  }

  public deleteContract(contract: Contract): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${contract.id}`);
  }
}
