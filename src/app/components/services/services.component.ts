import { Component, OnInit } from '@angular/core';
import { services } from '../../shared/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any;
  constructor() { }

  ngOnInit() {
    this.services = services;
  }

}
