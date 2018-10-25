import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 31.752504;
  lng: number = 35.220820;
  zoom: number = 16;

  constructor() { }

  ngOnInit() {
  }

}
