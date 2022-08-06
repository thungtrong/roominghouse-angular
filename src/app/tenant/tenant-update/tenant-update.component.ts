import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/Room';
import { Tenant } from 'src/app/model/Tenant';
import { RoomService } from 'src/app/service/room.service';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-tenant-update',
  templateUrl: './tenant-update.component.html',
  styleUrls: ['./tenant-update.component.css']
})
export class TenantUpdateComponent implements OnInit {

  tenant: Tenant =  {gender: true};
  rooms: Room[] = [];
  selectedRoom: string = 'null';
  constructor(private tenantService: TenantService,
              private roomService: RoomService,
              private router: Router,
              private activated: ActivatedRoute) {    
   }

  ngOnInit(): void {
    let id = this.activated.snapshot.params['id'];
    this.tenantService.getTenantById(id).subscribe({
      next: (data) => {
        this.tenant = data;
        this.selectedRoom = JSON.stringify(data.room);
      }
    });
    this.roomService.getRoomList(0).subscribe({
      next: (data) => {
        this.rooms = data.content;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private saveTenant(tenant: Tenant)
  {
    this.tenant.room = JSON.parse(this.selectedRoom);
    this.tenantService.updateTenant(tenant).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToTenantList();
        },
        error: err => {
          console.log(err);
          alert("Xin hãy nhập đầy đủ thông tin");
        }
      }
    );
  }

  stringify(obj :Object) {
    return JSON.stringify(obj);
  }

  private goToTenantList()
  {
    this.router.navigate(['/tenant']);
  }

  onSubmit(): void {
    this.saveTenant(this.tenant);
  }

  goBack()
  {
    this.router.navigate(['/tenant']);
  }
}
