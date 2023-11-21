import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionalwork',
  templateUrl: './conditionalwork.component.html',
  styleUrls: ['./conditionalwork.component.css']
})
export class ConditionalworkComponent {
 title:string='conditionalworks work';
//  isActive:boolean=true;
 isActive:boolean=false;
// my practice work
 num:number=2;
 fontColor = 'yellow';
 sayHelloId = 1;
 canClick = true;
 message = 'Hello, World';

 sayMessage() {
   alert(this.message);
}

 
}


