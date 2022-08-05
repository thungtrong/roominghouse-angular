import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from 'src/app/model/Announcement';
import { AnnouncementService } from 'src/app/service/announcement.service';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent implements OnInit {
  announcement: Announcement = {};
  constructor(private announcementService: AnnouncementService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params['id'];
    this.announcementService.getAnnouncementById(+id).subscribe({
      next: (data) => {this.announcement = data; console.log(data);},
      error: (error) => console.log(error)
    });
  }

}
