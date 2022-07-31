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
