import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  title:string='My Friendlist';
  errorMsg:string='';
  
  isHave= true;

  hideList(){
    this.isHave = false;
}
addFriends(val:any){
  if(val===null || val===undefined || val===''){
    this.errorMsg=('required feild please add data');
    setTimeout(()=>{
       this.errorMsg='';
    },2000)
   }
   else{
     this.friendslist.push(val);
   }
}
remove(deleteme:any){
  this.friendslist.splice(deleteme,1);
}

  friendslist:any = [
    {
      name: 'Khushboo',
      age: 20
    },
    {
      name: 'Shivangi',
      age: 22
    },
    {
      name: 'Garima',
      age: 21
    },
    {
      name: 'Nancy',
      age: 22
    },
    {
      name: 'Gunja',
      age: 21
    },
    {
      name: 'Rashi',
      age: 22
    },
    {
      name: 'Preety',
      age: 21
    },
    {
      name: 'Pooja',
      age: 21
    },
  ]

}
 

