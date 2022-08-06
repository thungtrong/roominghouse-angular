import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name?: string = 'Admin';
  constructor(private router: Router) { }

  ngOnInit(): void {
    let tmp = JSON.parse(localStorage.getItem('user') || '');
    this.name = tmp.name;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
