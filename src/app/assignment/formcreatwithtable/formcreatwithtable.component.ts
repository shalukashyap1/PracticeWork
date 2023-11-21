import { Component } from '@angular/core';

@Component({
  selector: 'app-formcreatwithtable',
  templateUrl: './formcreatwithtable.component.html',
  styleUrls: ['./formcreatwithtable.component.css']
})
export class FormcreatwithtableComponent {
  // fullName:string='';
  // email:string='';
  // dob:string='';
  // city:string='';
 
  // submitData(fn:string,em:string,db:string,ct:string){
  //  this.fullName=fn;
  //  this.email=em;
  //  this.dob=db;
  //  this.city=ct;
  //  console.log(this.fullName);
  //  console.log(this.email);
  //  console.log(this.dob);
  //  console.log(this.city);
   
  //  }
  

  submittedData: any[] = [];
  userno:any=0;
  fullName: string = '';
  email: string = '';
  dob: string = '';
  city: string = '';
  deleteme:any='';
  


  submitData() {
    const newData = {
      fullName: this.fullName,
      email: this.email,
      city: this.city,
      dob: this.dob,
      deleteme:this.deleteme,
    };
    
    if(newData.fullName.length>0 && newData.email.length>0 && newData.city.length>0 && newData.dob.length>0)
    
    {
    this.submittedData.push(newData);
    this.fullName = ''; 
    this.email = '';
    this.city = '';
    this.dob = '';
    }
    
  }
  ondelete(deleteme:any){
  this.submittedData.splice(deleteme,1);
}
}



 



