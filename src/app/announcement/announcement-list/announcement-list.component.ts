import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Announcement } from 'src/app/model/announcement';
import { AnnouncementService } from 'src/app/service/announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  tableHeaders: string[] = ['Tiêu Đề', 'Nội Dung', 'Date', 'Action'];
  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) { 
  }

  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  private getAllAnnouncements(): void {
    this.announcementService.getAnnouncementList().subscribe(
      data => {
        this.announcements = data;
      }
    );
  }

}
