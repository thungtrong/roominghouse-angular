import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from 'src/app/model/Building';
import { Room } from 'src/app/model/Room';
import { BuildingService } from 'src/app/service/building.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {
  room: Room =  {status: false};
  buildings: Building[] = [];
  selectedBuilding: string = '';
  constructor(private roomService: RoomService,
              private buildingService: BuildingService,
              private router: Router) {    
   }

  ngOnInit(): void {
    this.buildingService.getAllBuilding().subscribe({
      next: (data) => {this.buildings = data; this.selectedBuilding = JSON.stringify(data[0]);},
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
    this.router.navigate(['/room']);
  }
}
