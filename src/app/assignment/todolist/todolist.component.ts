import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title:string='Todo list';
  errorMsg='';
  taskList:any[]=['javaScript','React'];

  
  addList(val:any){
    if(val===null || val===undefined || val===''){
     this.errorMsg=('required feild please add data');
     setTimeout(()=>{
        this.errorMsg='';
     },2000)
    }
    else{
      this.taskList.push(val);
    }
  }

  remove(deleteme:any){
    this.taskList.splice(deleteme,1);
  }
  }


