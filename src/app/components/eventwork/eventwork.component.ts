import { Component } from '@angular/core';

@Component({
  selector: 'app-eventwork',
  templateUrl: './eventwork.component.html',
  styleUrls: ['./eventwork.component.css']
})
export class EventworkComponent {
  fname:string='';
  lname:string='';
  textarea:string='';
  fourW:string='';
  showData(fn:string,ln:string){
    this.fname=fn;
    this.lname=ln;
    console.log(this.fname);
    console.log(this.lname);
  }
  showTextAreawork(tx:string){
    this.textarea=tx;
    
  }
  forWords(tx:string){
    let s=tx.split(' ');
  
    for(let e of s){
      if(e.length===4){
        this.fourW+=e+" ";
      }
    }
  }

}
