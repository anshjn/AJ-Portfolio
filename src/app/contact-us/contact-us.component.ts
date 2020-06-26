import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  gotoTop() {
    console.log('hello');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  socialLinks(e) {
    window.open(e, "_blank");
  }
}
