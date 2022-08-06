import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  controls = [
    {name: 'Toà Nhà', path: '/building'},
    {name: 'Phòng', path: '/room'},
    {name: 'Người Thuê', path: '/tenant'},
    {name: 'Nhân Viên', path: '/employee'},
    {name: 'Hợp Đồng', path: '/contract'},
    {name: 'Hoá đơn', path: '/invoice'},
    {name: 'Chí phí bảo trì', path: '/maintenance'},
    {name: 'Thông báo', path: '/announcement'},
    {name: 'Dịch Vụ', path: '/service'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
