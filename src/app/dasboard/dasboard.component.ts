import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  controls = [
    {displayName: 'Toà Nhà', path: '/building', icon: 'fa fa-building'},
    {displayName: 'Phòng', path: '/room', icon: 'fa fa-home'},
    {displayName: 'Người Thuê', path: '/tenant', icon: 'fa fa-users'},
    {displayName: 'Nhân Viên', path: '/employee', icon: 'fa fa-user-circle-o'},
    {displayName: 'Hợp Đồng', path: '/contract', icon: 'fa fa-file-text-o'},
    {displayName: 'Hoá đơn', path: '/invoice', icon: 'fa fa-file-o'},
    {displayName: 'Chí phí bảo trì', path: '/maintenance', icon: 'fa fa-wrench'},
    {displayName: 'Thông báo', path: '/announcement', icon: 'fa fa-bell'},
    {displayName: 'Dịch Vụ', path: '/service', icon: 'fa fa-usd'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
