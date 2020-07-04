import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  @ViewChild('overlay1') public overlay1:ElementRef;
  @ViewChild('slider1') public slider1:ElementRef;
  images = [];
  imagesArrays = {
    herbal: [{src: '/assets/image/services/daburherbal/herbal1.PNG', percent: 0},
             {src: '/assets/image/services/daburherbal/herbal2.PNG', percent: 100},
             {src: '/assets/image/services/daburherbal/herbal3.PNG', percent: 200},
             {src: '/assets/image/services/daburherbal/herbal4.PNG', percent: 300},
             {src: '/assets/image/services/daburherbal/herbal5.PNG', percent: 400}],

    nexon: [{src: '/assets/image/services/nexonev/nexon1.webp', percent: 0},
            {src: '/assets/image/services/nexonev/nexon2.webp', percent: 100},
            {src: '/assets/image/services/nexonev/nexon3.webp', percent: 200},
            {src: '/assets/image/services/nexonev/nexon4.webp', percent: 300},
            {src: '/assets/image/services/nexonev/nexon5.webp', percent: 400},
            {src: '/assets/image/services/nexonev/nexon6.webp', percent: 500},
            {src: '/assets/image/services/nexonev/nexon7.webp', percent: 600},
            {src: '/assets/image/services/nexonev/nexon8.webp', percent: 700},
                ],

    stylistfinder: [
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder1.webp', percent: 0},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder2.webp', percent: 100},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder3.webp', percent: 200},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder4.webp', percent: 300},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder5.webp', percent: 400},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder6.webp', percent: 500},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder7.webp', percent: 600},
                  {src: '/assets/image/services/stylistfinderapk/stylistfinder8.webp', percent: 700},
                  ],
    
    dashboard: [
              {src: '/assets/image/services/stylistfinderDashboard/dashboard1.PNG', percent: 0},
              {src: '/assets/image/services/stylistfinderDashboard/dashboard2.PNG', percent: 100},
              {src: '/assets/image/services/stylistfinderDashboard/dashboard3.PNG', percent: 200},
              {src: '/assets/image/services/stylistfinderDashboard/dashboard4.PNG', percent: 300},
              {src: '/assets/image/services/stylistfinderDashboard/dashboard5.PNG', percent: 400},
              {src: '/assets/image/services/stylistfinderDashboard/dashboard6.PNG', percent: 500},
                ],

    tgelf: [
      {src: '/assets/image/services/tgelf/tgelf1.PNG', percent: 100},
      {src: '/assets/image/services/tgelf/tgelf2.PNG', percent: 200},
      {src: '/assets/image/services/tgelf/tgelf3.PNG', percent: 300},
      {src: '/assets/image/services/tgelf/tgelf4.PNG', percent: 400},
    ]
  }
  count = 0;
  
  constructor() { }

  ngOnInit() {
  }
  initImages() {
    this.imagesArrays = {
      herbal: [{src: '/assets/image/services/daburherbal/herbal1.PNG', percent: 0},
               {src: '/assets/image/services/daburherbal/herbal2.PNG', percent: 100},
               {src: '/assets/image/services/daburherbal/herbal3.PNG', percent: 200},
               {src: '/assets/image/services/daburherbal/herbal4.PNG', percent: 300},
               {src: '/assets/image/services/daburherbal/herbal5.PNG', percent: 400}],
  
      nexon: [{src: '/assets/image/services/nexonev/nexon1.webp', percent: 0},
              {src: '/assets/image/services/nexonev/nexon2.webp', percent: 100},
              {src: '/assets/image/services/nexonev/nexon3.webp', percent: 200},
              {src: '/assets/image/services/nexonev/nexon4.webp', percent: 300},
              {src: '/assets/image/services/nexonev/nexon5.webp', percent: 400},
              {src: '/assets/image/services/nexonev/nexon6.webp', percent: 500},
              {src: '/assets/image/services/nexonev/nexon7.webp', percent: 600},
              {src: '/assets/image/services/nexonev/nexon8.webp', percent: 700},
                  ],
  
      stylistfinder: [
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder1.webp', percent: 0},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder2.webp', percent: 100},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder3.webp', percent: 200},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder4.webp', percent: 300},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder5.webp', percent: 400},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder6.webp', percent: 500},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder7.webp', percent: 600},
                    {src: '/assets/image/services/stylistfinderapk/stylistfinder8.webp', percent: 700},
                    ],
      
      dashboard: [
                {src: '/assets/image/services/stylistfinderDashboard/dashboard1.PNG', percent: 0},
                {src: '/assets/image/services/stylistfinderDashboard/dashboard2.PNG', percent: 100},
                {src: '/assets/image/services/stylistfinderDashboard/dashboard3.PNG', percent: 200},
                {src: '/assets/image/services/stylistfinderDashboard/dashboard4.PNG', percent: 300},
                {src: '/assets/image/services/stylistfinderDashboard/dashboard5.PNG', percent: 400},
                {src: '/assets/image/services/stylistfinderDashboard/dashboard6.PNG', percent: 500},
                  ],
  
      tgelf: [
        {src: '/assets/image/services/tgelf/tgelf1.PNG', percent: 0},
        {src: '/assets/image/services/tgelf/tgelf2.PNG', percent: 100},
        {src: '/assets/image/services/tgelf/tgelf3.PNG', percent: 200},
      ]
    }
  }
  selectImage(e) {
    this.count = 0;
    console.log(e);
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('slider').style.display = 'flex';
    this.initImages();
    this.images = this.imagesArrays[e];
    
    for(let i = 0; i < this.images.length-1; i++) {
      let id = 'slide' + i;
      setTimeout(() => {
      console.log(document.getElementById(id));
      document.getElementById(id).style.left = this.images[i].percent + '%';
      }, 100);
    }
  }
  close() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('slider').style.display = 'none';
  }
  next() {
    this.count++;
    if(this.count > this.images.length-1) {
      this.count = this.images.length -1;
      console.log(this.count);
      return;
    } 
    

    for(let i = 0; i <= this.images.length -1; i++) {
      this.images[i].percent -= 100;
      let id = 'slide' + i;
      setTimeout(() => {
        console.log(document.getElementById(id));
        document.getElementById(id).style.left = this.images[i].percent + '%';
        console.log(document.getElementById(id).style.left);
      }, 100);
    }
  }

  prev() {
    this.count--;
    if(this.count < 0) {
      this.count = 0;
      console.log(this.count);
      return;
    } 
    for(let i = 0; i <= this.images.length -1; i++) {
      this.images[i].percent += 100;
      let id = 'slide' + i;
      setTimeout(() => {
        document.getElementById(id).style.left = this.images[i].percent + '%';
      }, 100);
    }
  }





  selectImage1(e) {
    this.count = 0;
    console.log(e);
    this.overlay1.nativeElement.style.display = 'flex';
    this.slider1.nativeElement.style.display = 'flex';
    this.initImages();
    this.images = this.imagesArrays[e];
    
    for(let i = 0; i < this.images.length-1; i++) {
      let id = 'slides' + i;
      setTimeout(() => {
      console.log(document.getElementById(id));
      document.getElementById(id).style.left = this.images[i].percent + '%';
      }, 100);
    }
  }
  close1() {
    this.overlay1.nativeElement.style.display = 'none';
    this.slider1.nativeElement.style.display = 'none';
  }
  next1() {
    this.count++;
    if(this.count > this.images.length-1) {
      this.count = this.images.length -1;
      console.log(this.count);
      return;
    } 
    

    for(let i = 0; i <= this.images.length -1; i++) {
      this.images[i].percent -= 100;
      let id = 'slides' + i;
      setTimeout(() => {
        console.log(document.getElementById(id));
        document.getElementById(id).style.left = this.images[i].percent + '%';
        console.log(document.getElementById(id).style.left);
      }, 100);
    }
  }

  prev1() {
    this.count--;
    if(this.count < 0) {
      this.count = 0;
      console.log(this.count);
      return;
    } 
    for(let i = 0; i <= this.images.length -1; i++) {
      this.images[i].percent += 100;
      let id = 'slides' + i;
      setTimeout(() => {
        document.getElementById(id).style.left = this.images[i].percent + '%';
      }, 100);
    }
  }
}
