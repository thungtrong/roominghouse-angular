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
