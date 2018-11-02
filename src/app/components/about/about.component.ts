import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/shared/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: any = about;

  constructor() { }

  ngOnInit() {
  }

}
