import { Component } from '@angular/core';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  title: string = 'Contact Form';

  sendData(mail: string, contact: string, subject: string, message: string) {
    console.log('Mail:', mail);
    console.log('Contact:', contact);
    console.log('Subject:', subject);
    console.log('Message:', message);
  }
}




