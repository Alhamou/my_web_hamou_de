import { Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('contact') formValues; // Added this
  
  constructor( private db: AngularFirestore ) {}

  captcha = false;
  not_submited = false;
  submited = false;


  resolved(captchaResponse: string) {
    if (captchaResponse){
      this.captcha = true;
      
    }
}


  onSubmit(data) {
    data.value.data = new Date();
    if (this.captcha === true){
      this.addItem(data.value);
      this.submitForm();
      grecaptcha.reset();
      this.submited = true;
      this.not_submited = false;
    } else {
      this.not_submited = true;
      this.submited = false;
    }
  }

  addItem(item: Contact) {
    this.db.collection('/contact').add(item);
  }

  submition(){
    console.log('cc');
  }

  submitForm() {
    this.formValues.reset();
  }


}
