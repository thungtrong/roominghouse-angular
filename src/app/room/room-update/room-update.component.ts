import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/model/Building';
import { Room } from 'src/app/model/Room';
import { BuildingService } from 'src/app/service/building.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  room: Room =  {status: false};
  buildings: Building[] = [];
  selectedBuilding: string = '';
  constructor(private roomService: RoomService,
              private buildingService: BuildingService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {    
   }

  ngOnInit(): void {
    
    let id = this.activatedRoute.snapshot.params['id'];
    this.roomService.getRoomById(id).subscribe({
      next: (data) => {
        if (data===null) {
          alert('Room not found');
          this.router.navigate(['/room']);
        }
        this.room = data;
        this.selectedBuilding = JSON.stringify(this.room.building);
      },
      error: (err) => console.log(err)
    })
    this.buildingService.getAllBuilding().subscribe({
      next: (data) => {this.buildings = data; },
      error: (err) => console.log(err)
    })
  }

  private saveRoom(room: Room)
  {
    this.roomService.createRoom(room).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToRoomList();
        },
        error: err => console.log(err)
      }
    );
  }

  private goToRoomList()
  {
    this.router.navigate(['/room']);
  }
  
  onSubmit(): void {
    this.room.building = JSON.parse(this.selectedBuilding);
    console.log(this.room);
    this.saveRoom(this.room);
  }
  stringify(obj: any): string {
    return JSON.stringify(obj);
  }
  buildingChange(tmp: any)
  {
    console.log(tmp);
  }

  goBack()
  {
    this.router.navigate(['/building']);
  }
}
