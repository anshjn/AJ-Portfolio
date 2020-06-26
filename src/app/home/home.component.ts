import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ViewChild, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutus') aboutus: ElementRef;
  @ViewChild('services') services: ElementRef;
  @ViewChild('work') work: ElementRef;
  @ViewChild('blogs') blogs: ElementRef;
  @ViewChild('contactus') contactus: ElementRef;
  @ViewChild('header') header: ElementRef;
  modalStatus = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll');
    console.log(scroll$);
  }
  scroll(el) {
    console.log(el);

    if (el == 'aboutus') {
      console.log('aboutus');
      this.aboutus.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }
    if (el == 'services') {
      console.log('services');
      this.services.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }
    if (el == 'work') {
      console.log('work');
      this.work.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }
    if (el == 'blogs') {
      console.log('blogs');
      this.blogs.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }
    if (el == 'contactus') {
      console.log('contactus');
      this.contactus.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    this.close();
  }
  smallScroll(el) {
    console.log(el);

    if (el == 'aboutus') {
      console.log('aboutus');
      document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' });

      this.close();
    }
    if (el == 'services') {
      console.log('services');
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });

      this.close();
    }
    if (el == 'work') {
      console.log('work');
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });

      this.close();
    }
    if (el == 'blogs') {
      console.log('blogs');
      document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' });

      this.close();
    }
    if (el == 'contactus') {
      console.log('contactus');
      document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });

      this.close();
    }
  }
  gotoTop() {
    this.aboutus.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  open() {
    document.getElementById('sl').style.display = 'flex';
    document.getElementById('overlay1').style.display = 'flex';

    document.getElementById('sidebar').style.width = '60vw';
    document.getElementById('menu').style.display = 'flex';
  }
  close() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('sl').style.display = 'none';
    document.getElementById('overlay1').style.display = 'none';
    document.getElementById('sidebar').style.width = '0vw';
    document.getElementById('overlay').style.display = 'none';
    this.modalStatus = false;
  }
  showModal() {
    this.modalStatus = true;
    document.getElementById('overlay').style.display = 'flex';
  }
  socialLinks(e) {
    window.open(e, "_blank");
  }
}
