import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit, AfterViewInit {
  @ViewChild('inner_circle1') circle1: ElementRef;
  @ViewChild('inner_circle2') circle2: ElementRef;
  @ViewChild('sinner_circle1') scircle1: ElementRef;
  @ViewChild('sinner_circle2') scircle2: ElementRef;
  @ViewChild('circletraverse1') circletraverse1: ElementRef;
  @ViewChild('circletraverse2') circletraverse2: ElementRef;
  @ViewChild('icon1') icon1: ElementRef;
  @ViewChild('icon2') icon2: ElementRef;
  count = true;
  constructor() {

   }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.logoSlider(1);
  }

  slider(e) {
    if (e === 1) {
      this.circle1.nativeElement.style.left = '50%';
      this.circle2.nativeElement.style.left = '200%';
    } else if (e === 2) {
      this.circle1.nativeElement.style.left = '-200%';
      this.circle2.nativeElement.style.left = '50%';
    }
  }

  logoSlider(e) {
    if (e == 1) {
      this.icon1.nativeElement.style.display = 'none';
      this.icon2.nativeElement.style.display = 'flex';
      this.circletraverse1.nativeElement.style.backgroundColor = '#0444a0';
      this.circletraverse2.nativeElement.style.backgroundColor = 'transparent';
    } else if (e == 2) {
      this.icon1.nativeElement.style.display = 'flex';
      this.icon2.nativeElement.style.display = 'none';
      this.circletraverse2.nativeElement.style.backgroundColor = '#0444a0';
      this.circletraverse1.nativeElement.style.backgroundColor = 'transparent';
    }
  }

  smallslider(e) {
    if (e === 1) {
      this.scircle1.nativeElement.style.left = '50%';
      this.scircle2.nativeElement.style.left = '200%';
    } else if (e === 2) {
      this.scircle1.nativeElement.style.left = '-200%';
      this.scircle2.nativeElement.style.left = '50%';
    }
  }
}
