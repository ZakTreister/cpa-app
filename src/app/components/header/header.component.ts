import { Component, OnInit } from '@angular/core';
import { navbarItems } from '../../shared/navbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;
  navbarItems: any;
  constructor() { }

  ngOnInit() {
    this.navbarItems = navbarItems;
  }

}
