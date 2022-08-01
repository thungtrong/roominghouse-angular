import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private announcementService: AnnouncementService,
    ) { 
  }

  ngOnInit(): void {
    this.getAllAnnouncements(0);
  }

  private getAllAnnouncements(page: number): void {
    this.announcementService.getAnnouncementList(page).subscribe(
      data => {
        console.log(data);
        this.announcements = data.content;
        // data.content.forEach((announcement) => {this.announcements.push(announcement)})
        // data.content.forEach((announcement) => {this.announcements.push(announcement)})
      }
    );
  }

}
;