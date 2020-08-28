import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, Form } from "@angular/forms";
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  sent = false;
  messageForm: FormGroup;
  submitted = false;
  response = true;
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private common: CommonService) {
    
  }
  

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      
      name: ["", Validators.required],
      contact: ["", [Validators.required, Validators.minLength(10)]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required]]

    });
  }
  get f() { return this.messageForm.controls; }
  send() {
    
    console.log('validation', this.messageForm.invalid);
        // stop here if form is invalid
        if (this.messageForm.invalid) {
            
            return;
        }   
    let obj = {
      name: this.messageForm.get('name').value,
      email: this.messageForm.get('email').value,
      contact: this.messageForm.get('contact').value,
      message: this.messageForm.get('message').value
    }
    console.log(obj);
    this.common.status = true;
    this.http.post('https://anshul-portfolio-backend.herokuapp.com/addcontact', obj).subscribe(resp => {
      console.log(resp);
      if(resp['status'] === 'success') {
        this.common.msg = 'Message sent successfully!'
        this.common.status = false;
        this.messageForm.reset();
        setTimeout(() => {
          this.common.msg = null;
        }, 2000);
      }
    }, err => {
      this.common.msg = 'Something went wrong!';
      this.common.status = false;
      setTimeout(() => {
        this.common.msg = null;
      }, 2000);
    });
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
