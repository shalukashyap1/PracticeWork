import { Component } from '@angular/core';
//@component:decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  Fname:string='Shalu';
  Lname='Kashyap';
  city='muzaffarnagar';
}
