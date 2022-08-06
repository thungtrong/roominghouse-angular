import { Component, OnInit } from '@angular/core';
import { Item } from './sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: Item[] = [
    {title: 'Bảng Điều Khiển', path: "/dasboard"},
    {title: 'Toà Nhà',  path:"/building"}, 
    {title: 'Phòng',  path:"/room"},
    {title: 'Người Thuê',  path:"/tenant"},
    {title: 'Nhân Viên',  path:"/employee"},
    {title: 'Hợp Đồng',  path:"/contract"},
    {title: 'Hoá Đơn',  path:"/invoice"},
    {title: 'Chí Phí Bảo Trì',  path:"/maintenance"},
    {title: 'Thông Báo', path:"/announcement"},
    {title: 'Dịch Vụ', path:"/service"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
