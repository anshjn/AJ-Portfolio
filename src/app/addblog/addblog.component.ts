
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from "@angular/forms";
import { CommonService } from '../common.service';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  addBlogForm: FormGroup;
  fileName: any;
  constructor(private formBuilder: FormBuilder, private common: CommonService) { }

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
      // this.addBlogForm.get('image').setValue(file);
      this.fileName = file;
    }
  }
  submitForm() {
    let formData = new FormData();
    formData.append('date', this.addBlogForm.get('date').value);
    formData.append('title', this.addBlogForm.get('title').value);
    formData.append('content', this.addBlogForm.get('content').value);
    formData.append('image', this.fileName);
    // let obj = {
    //   date: this.addBlogForm.get('date').value,
    //   title: this.addBlogForm.get('title').value,
    //   content: this.addBlogForm.get('content').value,
    //   image: this.fileName
    // }
    // console.log(this.addBlogForm.get('date').value);
    // console.log(obj);
    this.common.postApi('blog', formData).subscribe(data => {
      console.log(data);
    })
  }
}
