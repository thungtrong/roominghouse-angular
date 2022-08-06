import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/model/Announcement';
import { AnnouncementService } from 'src/app/service/announcement.service';
@Component({
  selector: 'app-announcement-update',
  templateUrl: './announcement-update.component.html',
  styleUrls: ['./announcement-update.component.css']
})
export class AnnouncementUpdateComponent implements OnInit {

  announcement: Announcement =  {date: new Date()};
  constructor(private announcementService: AnnouncementService, 
    private router: Router,
    private route: ActivatedRoute,) {
    
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id)
    {
      this.announcementService.getAnnouncementById(id).subscribe({
        next: (data) => {
          if (data===null) {
            alert('Announcement not found');
            this.router.navigate(['/announcement']);
          }
          this.announcement = data;
          
          if (typeof data.date === 'string')
          {
            let [year, month, day] = (data.date as string).split('-');
            this.announcement.date = new Date(+year, +month-1, +day+1);
          }
        },
        error: (error) => console.log(error)
      });
    }
    
  }

  onSubmit(): void {
    this.announcementService.updateAnnouncement(this.announcement).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/announcement']);
      },
      error: (error) => console.log(error)
    });
  }

  parseDate(target: any)
  {
    if (target.value)
      this.announcement.date = new Date(target.value);
    else
      this.announcement.date = undefined;
  }
}
