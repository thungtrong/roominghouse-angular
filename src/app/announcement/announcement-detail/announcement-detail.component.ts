import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from 'src/app/model/Announcement';
import { AnnouncementService } from 'src/app/service/announcement.service';
import { BasicCommponent } from 'src/app/service/basic-component';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent extends BasicCommponent implements OnInit {
  announcement: Announcement = {};
  constructor(private announcementService: AnnouncementService,
    private router: Router,
    location: Location,
    private activatedRoute: ActivatedRoute) {
      super(location);
     }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params['id'];
    this.announcementService.getAnnouncementById(+id).subscribe({
      next: (data) => {
        if (data===null) {
          alert('Announcement not found');
          this.router.navigate(['/announcement']);
        }
        this.announcement = data;
      },
      error: (error) => console.log(error)
    });
  }

}
