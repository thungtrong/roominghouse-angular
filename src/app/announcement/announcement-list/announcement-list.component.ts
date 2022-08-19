import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from 'src/app/model/Announcement';
import { AnnouncementService } from 'src/app/service/announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
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
        // console.log(data);
        this.announcements = data.content;
      }
    );
  }

  deleteAnnouncement(announcement: Announcement){
    let choose = confirm(`Are you sure you want to delete this announcement`);
    if (choose) {
      this.announcementService.deleteAnnouncement(announcement).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (error) => console.log(error)
      });
    }
    else
      console.log('ko xoa');
  }
}
;