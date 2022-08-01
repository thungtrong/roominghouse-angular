import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  title: string = 'Thông Báo';
  constructor() { }
  ngOnChanges(): void {
  }

  ngOnInit(): void {

  }

}