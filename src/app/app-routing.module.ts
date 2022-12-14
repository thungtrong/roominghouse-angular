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
  {path: 'login', component: LoginComponent, title: '????ng Nh???p'},
  {path: 'dashboard', component: DasboardComponent, title: 'B???ng ??i???u Khi???n'},
  {
    path: 'announcement',
    component: AnnouncementComponent,
    children: [
      {path: 'list', component: AnnouncementListComponent},
      {path: 'detail/:id', component: AnnouncementDetailComponent},
      {path: 'update/:id', component: AnnouncementUpdateComponent, title: 'C???p Nh???t Th??ng B??o'},
      {path: 'create', component: AnnouncementCreateComponent, title: 'T???o Th??ng B??o'},
      {path: '', component: AnnouncementListComponent, pathMatch: 'full'}
      
    ],
    title: 'Th??ng B??o'
  },

  {path: 'building', component: BuildingComponent,
    children: [
      {path: 'list', component: BuildingListComponent},
      {path: 'detail/:id', component: BuildingDetailComponent},
      {path: 'update/:id', component: BuildingUpdateComponent, title: 'C???p Nh???t To?? Nh??'},
      {path: 'create', component: BuildingCreateComponent, title: 'Th??m To?? Nh??'},
      {path: '', component: BuildingListComponent, pathMatch: 'full'}
    ],
    title: 'To?? Nh??'
  },
  {path: 'room', component: RoomComponent,
    children: [
      {path: 'list', component: RoomListComponent},
      {path: 'detail/:id', component: RoomDetailComponent},
      {path: 'update/:id', component: RoomUpdateComponent, title: 'C???p Nh???t Ph??ng'},
      {path: 'create', component: RoomCreateComponent, title: 'Th??m Ph??ng'},
      {path: '', component: RoomListComponent, pathMatch: 'full'}
  ],
    title: 'Ph??ng'
  },  
  {path: 'tenant', component: TenantComponent,
    children: [
      {path: 'list', component: TenantListComponent},
      {path: 'detail/:id', component: TenantDetailComponent},
      {path: 'update/:id', component: TenantUpdateComponent, title: 'C???p Nh???t Ng?????i Thu??'},
      {path: 'create', component: TenantCreateComponent, title: 'Th??m Ng?????i Thu??'},
      {path: '', component: TenantListComponent, pathMatch: 'full'}
    ],
    title: 'Ng?????i Thu??'
  },
  {path: 'employee', component: EmployeeComponent,
    children: [
      {path: 'list', component: EmployeeListComponent},
      {path: 'detail/:id', component: EmployeeDetailComponent},
      {path: 'update/:id', component: EmployeeUpdateComponent, title: 'C???p Nh???t Nh??n Vi??n'},
      {path: 'create', component: EmployeeCreateComponent, title: 'Th??m Nh??n Vi??n'},
      {path: '', component: EmployeeListComponent, pathMatch: 'full'}
    ],
    title: 'Nh??n vi??n'
  },
  {path: 'contract', component: ContractComponent,
    children: [
      {path: 'list', component: ContractListComponent},
      {path: 'detail/:id', component: ContractDetailComponent},
      {path: 'update/:id', component: ContractUpdateComponent, title: 'C???p Nh???t H???p ?????ng'},
      {path: 'create', component: ContractCreateComponent, title: 'Th??m H???p ?????ng'},
      {path: '', component: ContractListComponent, pathMatch: 'full'}
    ],
    title: 'H???p ?????ng'
  },
  {path: 'invoice', component: InvoiceComponent,
    children: [
      {path: 'list', component: InvoiceListComponent},
      {path: 'detail/:id', component: InvoiceDetailComponent},
      {path: 'update/:id', component: InvoiceUpdateComponent, title: 'C???p Nh???t Ho?? ????n'},
      {path: 'create', component: InvoiceCreateComponent, title: 'Th??m Ho?? ????n'},
      {path: '', component: InvoiceListComponent, pathMatch: 'full'}
    ],
    title: 'Ho?? ????n'
  },
  {path: 'maintenance', component: MaintenanceComponent,
    children: [
      {path: 'list', component: MaintenanceListComponent},
      {path: 'detail/:id', component: MaintenanceDetailComponent},
      {path: 'update/:id', component: MaintenanceUpdateComponent, title: 'C???p Nh???t B???o Tr??'},
      {path: 'create', component: MaintenanceCreateComponent, title: 'Th??m B???o Tr??'},
      {path: '', component: MaintenanceListComponent, pathMatch: 'full'}
    ],
    title: 'Chi ph?? b???o tr??'
  },
  
  {path: 'service', component: ServicePriceComponent,
    title: 'D???ch V???'
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
