
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from "@angular/forms";

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  addBlogForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addBlogForm = this.formBuilder.group({
      date: '',
      title: '',
      content: '',
      image: null
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addBlogForm.get('image').setValue(file);
      // this.fileName = file.name;
    }
  }
  submitForm() {
    let formData = new FormData();
    formData.append('date', this.addBlogForm.get('date').value);
    formData.append('title', this.addBlogForm.get('title').value);
    formData.append('content', this.addBlogForm.get('content').value);
    formData.append('image', this.addBlogForm.get('image').value);
    console.log(this.addBlogForm.get('date').value);
    
  }
}
