import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementCreateComponent } from './announcement/announcement-create/announcement-create.component';
import { AnnouncementListComponent } from './announcement/announcement-list/announcement-list.component';
import { AnnouncementUpdateComponent } from './announcement/announcement-update/announcement-update.component';
import { AnnouncementComponent } from './announcement/announcement/announcement.component';

const routes: Routes = [
  {
    path: 'announcement',
    component: AnnouncementComponent,
    children: [
      {path: 'list', component: AnnouncementListComponent},
      {path: 'update/:id', component: AnnouncementUpdateComponent, title: 'Cập Nhật Thông Báo'},
      {path: 'create', component: AnnouncementCreateComponent, title: 'Tạo Thông Báo'},
      {path: '', component: AnnouncementListComponent, pathMatch: 'full'}
      
    ],
    title: 'Thông Báo'
  },


  {path: '', redirectTo: 'announcement', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
