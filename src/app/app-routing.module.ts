import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementCreateComponent } from './announcement/announcement-create/announcement-create.component';
import { AnnouncementDetailComponent } from './announcement/announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { AnnouncementUpdateComponent } from './announcement/announcement-update/announcement-update.component';
import { AnnouncementComponent } from './announcement/announcement/announcement.component';
import { BuildingCreateComponent } from './buillding/building-create/building-create.component';
import { BuildingDetailComponent } from './buillding/building-detail/building-detail.component';
import { BuildingListComponent } from './buillding/building-list/building-list.component';
import { BuildingUpdateComponent } from './buillding/building-update/building-update.component';
import { BuildingComponent } from './buillding/building/building.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractDetailComponent } from './contract/contract-detail/contract-detail.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractUpdateComponent } from './contract/contract-update/contract-update.component';
import { ContractComponent } from './contract/contract/contract.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { InvoiceCreateComponent } from './invoice/invoice-create/invoice-create.component';
import { InvoiceDetailComponent } from './invoice/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { InvoiceUpdateComponent } from './invoice/invoice-update/invoice-update.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceCreateComponent } from './maintenance/maintenance-create/maintenance-create.component';
import { MaintenanceDetailComponent } from './maintenance/maintenance-detail/maintenance-detail.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { MaintenanceUpdateComponent } from './maintenance/maintenance-update/maintenance-update.component';
import { MaintenanceComponent } from './maintenance/maintenance/maintenance.component';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { RoomComponent } from './room/room/room.component';
import { ServicePriceComponent } from './serviceprice/service-price/service-price.component';
import { TenantCreateComponent } from './tenant/tenant-create/tenant-create.component';
import { TenantDetailComponent } from './tenant/tenant-detail/tenant-detail.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';
import { TenantUpdateComponent } from './tenant/tenant-update/tenant-update.component';
import { TenantComponent } from './tenant/tenant/tenant.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'Đăng Nhập'},
  {path: 'dashboard', component: DasboardComponent, title: 'Bảng Điều Khiển'},
  {
    path: 'announcement',
    component: AnnouncementComponent,
    children: [
      {path: 'list', component: AnnouncementListComponent},
      {path: 'detail/:id', component: AnnouncementDetailComponent},
      {path: 'update/:id', component: AnnouncementUpdateComponent, title: 'Cập Nhật Thông Báo'},
      {path: 'create', component: AnnouncementCreateComponent, title: 'Tạo Thông Báo'},
      {path: '', component: AnnouncementListComponent, pathMatch: 'full'}
      
    ],
    title: 'Thông Báo'
  },

  {path: 'building', component: BuildingComponent,
    children: [
      {path: 'list', component: BuildingListComponent},
      {path: 'detail/:id', component: BuildingDetailComponent},
      {path: 'update/:id', component: BuildingUpdateComponent, title: 'Cập Nhật Toà Nhà'},
      {path: 'create', component: BuildingCreateComponent, title: 'Thêm Toà Nhà'},
      {path: '', component: BuildingListComponent, pathMatch: 'full'}
    ],
    title: 'Toà Nhà'
  },
  {path: 'room', component: RoomComponent,
    children: [
      {path: 'list', component: RoomListComponent},
      {path: 'detail/:id', component: RoomDetailComponent},
      {path: 'update/:id', component: RoomUpdateComponent, title: 'Cập Nhật Phòng'},
      {path: 'create', component: RoomCreateComponent, title: 'Thêm Phòng'},
      {path: '', component: RoomListComponent, pathMatch: 'full'}
  ],
    title: 'Phòng'
  },  
  {path: 'tenant', component: TenantComponent,
    children: [
      {path: 'list', component: TenantListComponent},
      {path: 'detail/:id', component: TenantDetailComponent},
      {path: 'update/:id', component: TenantUpdateComponent, title: 'Cập Nhật Người Thuê'},
      {path: 'create', component: TenantCreateComponent, title: 'Thêm Người Thuê'},
      {path: '', component: TenantListComponent, pathMatch: 'full'}
    ],
    title: 'Người Thuê'
  },
  {path: 'employee', component: EmployeeComponent,
    children: [
      {path: 'list', component: EmployeeListComponent},
      {path: 'detail/:id', component: EmployeeDetailComponent},
      {path: 'update/:id', component: EmployeeUpdateComponent, title: 'Cập Nhật Nhân Viên'},
      {path: 'create', component: EmployeeCreateComponent, title: 'Thêm Nhân Viên'},
      {path: '', component: EmployeeListComponent, pathMatch: 'full'}
    ],
    title: 'Nhân viên'
  },
  {path: 'contract', component: ContractComponent,
    children: [
      {path: 'list', component: ContractListComponent},
      {path: 'detail/:id', component: ContractDetailComponent},
      {path: 'update/:id', component: ContractUpdateComponent, title: 'Cập Nhật Hợp Đồng'},
      {path: 'create', component: ContractCreateComponent, title: 'Thêm Hợp Đồng'},
      {path: '', component: ContractListComponent, pathMatch: 'full'}
    ],
    title: 'Hợp Đồng'
  },
  {path: 'invoice', component: InvoiceComponent,
    children: [
      {path: 'list', component: InvoiceListComponent},
      {path: 'detail/:id', component: InvoiceDetailComponent},
      {path: 'update/:id', component: InvoiceUpdateComponent, title: 'Cập Nhật Hoá Đơn'},
      {path: 'create', component: InvoiceCreateComponent, title: 'Thêm Hoá Đơn'},
      {path: '', component: InvoiceListComponent, pathMatch: 'full'}
    ],
    title: 'Hoá đơn'
  },
  {path: 'maintenance', component: MaintenanceComponent,
    children: [
      {path: 'list', component: MaintenanceListComponent},
      {path: 'detail/:id', component: MaintenanceDetailComponent},
      {path: 'update/:id', component: MaintenanceUpdateComponent, title: 'Cập Nhật Bảo Trì'},
      {path: 'create', component: MaintenanceCreateComponent, title: 'Thêm Bảo Trì'},
      {path: '', component: MaintenanceListComponent, pathMatch: 'full'}
    ],
    title: 'Chi phí bảo trì'
  },
  
  {path: 'service', component: ServicePriceComponent,
    title: 'Dịch Vụ'
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
