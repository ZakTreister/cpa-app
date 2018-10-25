import { Component, OnInit } from '@angular/core';
import { faHome, faPhone, faFax, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {

  address: string;
  phone: string;
  cellphone: string;
  fax: string;

  faHouse = faHome;
  faPhone = faPhone;
  faFax = faFax;
  faCellphone = faMobileAlt;

  constructor() { }

  ngOnInit() {
    this.address = "Avraham Shalom Yehuda 7 Jerusalem";
    this.phone = "02-987-9876";
    this.cellphone = "052-385-7254";
    this.fax = "02-991-8117";
  }

}
