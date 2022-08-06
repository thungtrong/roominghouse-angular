import { Component, OnInit } from '@angular/core';
import { Item } from './sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: Item[] = [
    {title: 'Toà Nhà',  path:"/building"}, 
    {title: 'Phòng',  path:"/room"},
    {title: 'Người Thuê',  path:"/tenant"},
    {title: 'Hợp Đồng',  path:"/service"},
    {title: 'Hoá Đơn',  path:"/service"},
    {title: 'Chí Phí Bảo Trì',  path:"/service"},
    {title: 'Thông Báo', path:"/announcement"},
    {title: 'Dịch Vụ', path:"/service"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
