import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Room } from '../model/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl: string = "http://localhost:8081/api/room";
  
  constructor(private httpClient: HttpClient) { }

  public getRoomList(page: number): Observable<Page<Room>>
  {
    return this.httpClient.get<Page<Room>>(`${this.apiUrl}/list?page=${page}`);
  }

  public createRoom(room: Room): Observable<Room>
  {
    return this.httpClient.post<Room>(`${this.apiUrl}/add`, room);
  }

  public getRoomById(id: number): Observable<Room>
  {
    return this.httpClient.get<Room>(`${this.apiUrl}/find/${id}`);
  }

  public updateRoom(room: Room): Observable<Room>
  {
    return this.httpClient.put<Room>(`${this.apiUrl}/update`, room);
  }

  public deleteRoom(room: Room): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${room.id}`);
  }
}
