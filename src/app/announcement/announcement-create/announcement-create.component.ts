import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/model/Announcement';
import { AnnouncementService } from 'src/app/service/announcement.service';

@Component({
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html',
  styleUrls: ['./announcement-create.component.css']
})
export class AnnouncementCreateComponent implements OnInit {

  announcement: Announcement =  {title: '', body: '', date: new Date()};
  constructor(private announcementService: AnnouncementService,
              private router: Router) {    
   }

  ngOnInit(): void {
  }

  private saveAnnouncement(announcement: Announcement)
  {
    this.announcementService.createAnnouncement(announcement).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToAnnouncementList();
        },
        error: err => console.log(err)
      }
    );
  }

  private goToAnnouncementList()
  {
    this.router.navigate(['/announcement']);
  }

  onSubmit(): void {
    this.saveAnnouncement(this.announcement);
  }

  parseDate(target: any)
  {
    if (target.value)
      this.announcement.date = new Date(target.value);
    else
      this.announcement.date = undefined;
  }
}
