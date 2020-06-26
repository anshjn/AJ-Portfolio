import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  @ViewChild('services') services: ElementRef;
  @ViewChild('industries') industries: ElementRef;
  switchStatus = false;
  constructor() { }

  ngOnInit() {
  }
  switchTabs(e) {
    this.switchStatus = !this.switchStatus;
  }
}
