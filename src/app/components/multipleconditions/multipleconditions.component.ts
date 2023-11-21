import { Component } from '@angular/core';

@Component({
  selector: 'app-multipleconditions',
  templateUrl: './multipleconditions.component.html',
  styleUrls: ['./multipleconditions.component.css']
})
export class MultipleconditionsComponent {
  title:string='Multiple conditions';
  color:string='';

  showColor(c:string){
  this.color=c.toLowerCase();
}
title2:string='Switch case use for multiple conditions';
choice:string='';

showChoice(ch:string){
  this.choice=ch;
}
 

}
