import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/Room';
import { Tenant } from 'src/app/model/Tenant';
import { RoomService } from 'src/app/service/room.service';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-tenant-create',
  templateUrl: './tenant-create.component.html',
  styleUrls: ['./tenant-create.component.css']
})
export class TenantCreateComponent implements OnInit {
  tenant: Tenant =  {gender: true};
  rooms: Room[] = [];
  selectedRoom: string = 'null';
  constructor(private tenantService: TenantService,
              private roomService: RoomService,
              private router: Router) {    
   }

  ngOnInit(): void {
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
    this.tenantService.createTenant(tenant).subscribe(
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
