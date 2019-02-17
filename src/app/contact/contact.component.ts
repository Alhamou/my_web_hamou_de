import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor( private db: AngularFirestore ) {}

  captcha = false;


  resolved(captchaResponse: string) {
    if (captchaResponse){
      this.captcha = true;
    }
}


  onSubmit(data) {
    data.value.data = new Date();
    if (this.captcha === true){
      this.addItem(data.value);
    }
  }

  addItem(item: Contact) {
    this.db.collection('/contact').add(item);
  }

  submition(){
    console.log('cc');
  }
}
