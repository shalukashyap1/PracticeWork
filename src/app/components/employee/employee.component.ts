import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title:string='Employee Details';
  names:String[] = ['shalu','roma','rashi','Rekha','rohit','rakesh','billu','ajay','vijay'];
 data=[
    {
      eid:101,
      ename:'shalu',
      city:'up',
      salary:90000
    },
    {
      eid:102,
      ename:'sheli',
      city:'mzn',
      salary:80000
    },
    {
      eid:103,
      ename:'shaloni',
      city:'meerut',
      salary:85000
    },
    {
      eid:104,
      ename:'shobhna',
      city:'chandighar',
      salary:70000
    },
    {
      eid:105,
      ename:'madhu',
      city:'roorki',
      salary:95000
    },
    {
      eid:106,
      ename:'sonu',
      city:'ghaziabad',
      salary:90000
    },
    {
      eid:107,
      ename:'shyam',
      city:'khtoli',
      salary:92000
    },
    {
      eid:108,
      ename:'vijay',
      city:'delhi',
      salary:75000
    },
    {
      eid:109,
      ename:'khushboo',
      city:'bihar',
      salary:95000
    },


  ];

  myData:any[]=[101,'shalu','mzn',9000,true]

  taskList:any[]=[];
  addtask(val:any){
    this.taskList.push(val);
  }
}

