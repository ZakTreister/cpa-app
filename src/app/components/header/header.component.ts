import { Component, OnInit } from '@angular/core';
import { navbarItems } from '../../shared/navbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean;
  navbarItems: any;
  constructor() { }

  ngOnInit() {
    this.navbarItems = navbarItems;
    this.isCollapsed = false;
  }

}
