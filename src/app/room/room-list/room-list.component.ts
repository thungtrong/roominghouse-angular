import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/Room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  tableHeaders: string[] = ['Tên', 'Trạng thái','Diện tích', 'Toà Nhà', 'Mô Tả'];
  rooms: Room[] = [];
  constructor(
    private roomService: RoomService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllRooms(0);
  }

  getAllRooms(page: number)
  {
    this.roomService.getRoomList(page).subscribe({
      next: (data) => 
      {
        this.rooms = data.content;
      },
      error: (error) => console.log(error)
    })
  }

  deleteRoom(room: Room){
    let choose = confirm(`Are you sure you want to delete this room`);
    if (choose) {
      this.roomService.deleteRoom(room).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }
}
