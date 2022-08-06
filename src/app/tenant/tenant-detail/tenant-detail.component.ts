import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/model/Tenant';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.css']
})
export class TenantDetailComponent implements OnInit {

  tenant: Tenant =  {gender: true};
  selectedRoom: string = 'null';
  constructor(private tenantService: TenantService,
              // private roomService: RoomService,
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
