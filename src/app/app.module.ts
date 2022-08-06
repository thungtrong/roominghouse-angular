import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AnnouncementCreateComponent } from './announcement/announcement-create/announcement-create.component';
import { AnnouncementComponent } from './announcement/announcement/announcement.component';
import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { FormsModule } from '@angular/forms';
import { AnnouncementUpdateComponent } from './announcement/announcement-update/announcement-update.component';
import { AnnouncementDetailComponent } from './announcement/announcement-detail/announcement-detail.component';
import { BuildingComponent } from './buillding/building/building.component';
import { BuildingListComponent } from './buillding/building-list/building-list.component';
import { BuildingDetailComponent } from './buillding/building-detail/building-detail.component';
import { BuildingUpdateComponent } from './buillding/building-update/building-update.component';
import { BuildingCreateComponent } from './buillding/building-create/building-create.component';
import { RoomComponent } from './room/room/room.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { TenantComponent } from './tenant/tenant/tenant.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';
import { TenantCreateComponent } from './tenant/tenant-create/tenant-create.component';
import { TenantUpdateComponent } from './tenant/tenant-update/tenant-update.component';
import { TenantDetailComponent } from './tenant/tenant-detail/tenant-detail.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ServicePriceComponent } from './serviceprice/service-price/service-price.component';
import { MaintenanceComponent } from './maintenance/maintenance/maintenance.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { MaintenanceUpdateComponent } from './maintenance/maintenance-update/maintenance-update.component';
import { MaintenanceCreateComponent } from './maintenance/maintenance-create/maintenance-create.component';
import { MaintenanceDetailComponent } from './maintenance/maintenance-detail/maintenance-detail.component';
import { ContractComponent } from './contract/contract/contract.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractUpdateComponent } from './contract/contract-update/contract-update.component';
import { ContractDetailComponent } from './contract/contract-detail/contract-detail.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { InvoiceCreateComponent } from './invoice/invoice-create/invoice-create.component';
import { InvoiceUpdateComponent } from './invoice/invoice-update/invoice-update.component';
import { InvoiceDetailComponent } from './invoice/invoice-detail/invoice-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    AnnouncementListComponent,
    AnnouncementCreateComponent,
    AnnouncementUpdateComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AnnouncementDetailComponent,
    BuildingComponent,
    BuildingListComponent,
    BuildingDetailComponent,
    BuildingUpdateComponent,
    BuildingCreateComponent,
    RoomComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomCreateComponent,
    RoomUpdateComponent,
    TenantComponent,
    TenantListComponent,
    TenantCreateComponent,
    TenantUpdateComponent,
    TenantDetailComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    DasboardComponent,
    ServicePriceComponent,
    MaintenanceComponent,
    MaintenanceListComponent,
    MaintenanceUpdateComponent,
    MaintenanceCreateComponent,
    MaintenanceDetailComponent,
    ContractComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractUpdateComponent,
    ContractDetailComponent,
    InvoiceComponent,
    InvoiceListComponent,
    InvoiceCreateComponent,
    InvoiceUpdateComponent,
    InvoiceDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
