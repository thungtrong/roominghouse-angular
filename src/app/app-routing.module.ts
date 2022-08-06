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
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { RoomComponent } from './room/room/room.component';
import { TenantCreateComponent } from './tenant/tenant-create/tenant-create.component';
import { TenantDetailComponent } from './tenant/tenant-detail/tenant-detail.component';
import { TenantListComponent } from './tenant/tenant-list/tenant-list.component';
import { TenantUpdateComponent } from './tenant/tenant-update/tenant-update.component';
import { TenantComponent } from './tenant/tenant/tenant.component';

const routes: Routes = [
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
      {path: 'update/:id', component: RoomUpdateComponent, title: 'Cập Nhật Toà Nhà'},
      {path: 'create', component: RoomCreateComponent, title: 'Thêm Toà Nhà'},
      {path: '', component: RoomListComponent, pathMatch: 'full'}
  ],
    title: 'Phòng'
  },  
  {path: 'tenant', component: TenantComponent,
    children: [
      {path: 'list', component: TenantListComponent},
      {path: 'detail/:id', component: TenantDetailComponent},
      {path: 'update/:id', component: TenantUpdateComponent, title: 'Cập Nhật Toà Nhà'},
      {path: 'create', component: TenantCreateComponent, title: 'Thêm Toà Nhà'},
      {path: '', component: TenantListComponent, pathMatch: 'full'}
    ],
    title: 'Phòng'
  },
  {path: '', redirectTo: 'announcement', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
