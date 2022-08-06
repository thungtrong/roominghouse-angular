import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/Room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  room: Room =  {};
  constructor(private roomService: RoomService, 
    private router: Router,
    private route: ActivatedRoute) {
    
   }

   ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id)
    {
      this.roomService.getRoomById(id).subscribe({
        next: (data) => {
          if (data===null) {
            alert('Room not found');
            this.router.navigate(['/room']);
          }
          this.room = data;
        },
        error: (error) => console.log(error)
      });
    }
    
  }

  goBack()
  {
    this.router.navigate(['/room']);
  }

}
