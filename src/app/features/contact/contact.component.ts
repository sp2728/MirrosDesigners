import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contactData: any;
  submitted: any;
  loading: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.submitted=false;
    this.createForm();
  }

  createForm(){
    this.contactForm =  this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  onSubmit(){
    this.submitted=true;
    this.contactData = this.contactForm.value;
    if(this.contactForm.valid){
      console.log(this.contactData)
      this.submitted=false;
    }
  }

}
