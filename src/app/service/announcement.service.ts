import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../model/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl: string = "http://localhost:8081/api/announcement";
  
  constructor(private httpClient: HttpClient) { }

  public getAnnouncementList(): Observable<Announcement[]>
  {
    return this.httpClient.get<Announcement[]>(`${this.apiUrl}/all`);
  }

  public createAnnouncement(announcement: Announcement): Observable<Announcement>
  {
    return this.httpClient.post<Announcement>(`${this.apiUrl}/add`, announcement);
  }

  public getAnnouncementById(id: number): Observable<Announcement>
  {
    return this.httpClient.get<Announcement>(`${this.apiUrl}/find/${id}`);
  }

  public updateAnnouncement(announcement: Announcement): Observable<Announcement>
  {
    return this.httpClient.put<Announcement>(`${this.apiUrl}/update`, announcement);
  }
}
