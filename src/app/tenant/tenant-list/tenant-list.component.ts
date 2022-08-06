import { Component, OnInit } from '@angular/core';
import { Tenant } from 'src/app/model/Tenant';
import { TenantService } from 'src/app/service/tenant.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

  tableHeaders: string[] = ['Tên', 'Giới Tính', 'Số Điện Thoại', 'Email', 'CMND/CCCD', 'Nghề Nghiệp', 'Quê Quán', 'Phòng'];
  tenants: Tenant[] = [];
  constructor(
    private tenantService: TenantService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllTenants(0);
  }

  getAllTenants(page: number)
  {
    this.tenantService.getTenantList(page).subscribe({
      next: (data) => 
      {
        this.tenants = data.content;
      },
      error: (error) => console.log(error)
    })
  }

  deleteTenant(tenant: Tenant){
    let choose = confirm(`Are you sure you want to delete this tenant`);
    if (choose) {
      this.tenantService.deleteTenant(tenant).subscribe({
        next: () => {
          let i;
          for (i = 0; i < this.tenants.length; i++) {
            let announ = this.tenants[i];
            if (announ.id === tenant.id)
              {
                break;
              }
          }
          this.tenants.splice(i, i);
          this.ngOnInit();
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }
}
