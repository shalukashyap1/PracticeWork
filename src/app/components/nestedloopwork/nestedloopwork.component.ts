import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedloopwork',
  templateUrl: './nestedloopwork.component.html',
  styleUrls: ['./nestedloopwork.component.css']
})
export class NestedloopworkComponent {

  title: string = 'Nested loop works';
  names: string[] = ['shalu', 'madhu', 'tania', 'rohit', 'vishu', 'sagar'];
  data = [
    // {
    //   "id": 1,
    //   "name": "Leanne Graham",
    //   "username": "Bret",
    //   "email": "Sincere@april.biz",
    //   "city": "Gwenborough",

    //   "phone": "1-770-736-8031 x56442",
    //   "website": "hildegard.org",
    // },
    // {
    //   "id": 2,
    //   "name": "Ervin Howell",
    //   "username": "Antonette",
    //   "email": "Shanna@melissa.tv",

    //   "city": "Wisokyburgh",


    //   "phone": "010-692-6593 x09125",
    //   "website": "anastasia.net",

    // },
    // {
    //   "id": 3,
    //   "name": "Clementine Bauch",
    //   "username": "Samantha",
    //   "email": "Nathan@yesenia.net",

    //   "city": "McKenziehaven",


    //   "phone": "1-463-123-4447",
    //   "website": "ramiro.info",

    // },
    // {
    //   "id": 4,
    //   "name": "Patricia Lebsack",
    //   "username": "Karianne",
    //   "email": "Julianne.OConner@kory.org",

    //   "city": "South Elvis",
    //   "phone": "493-170-9623 x156",
    //   "website": "kale.biz",

    // },
    // {
    //   "id": 5,
    //   "name": "Chelsey Dietrich",
    //   "username": "Kamren",
    //   "email": "Lucio_Hettinger@annie.ca",

    //   "city": "Roscoeview",

    //   "phone": "(254)954-1289",
    //   "website": "demarco.info",

    // },
    // {
    //   "id": 6,
    //   "name": "Mrs. Dennis Schulist",
    //   "username": "Leopoldo_Corkery",
    //   "email": "Karley_Dach@jasper.info",

    //   "city": "South Christy",

    //   "phone": "1-477-935-8478 x6430",
    //   "website": "ola.org",

    // },
    // {
    //   "id": 7,
    //   "name": "Kurtis Weissnat",
    //   "username": "Elwyn.Skiles",
    //   "email": "Telly.Hoeger@billy.biz",

    //   "city": "Howemouth",

    //   "phone": "210.067.6132",
    //   "website": "elvis.io",

    // },
    // {
    //   "id": 8,
    //   "name": "Nicholas Runolfsdottir V",
    //   "username": "Maxime_Nienow",
    //   "email": "Sherwood@rosamond.me",

    //   "city": "Aliyaview",


    //   "phone": "586.493.6943 x140",
    //   "website": "jacynthe.com",

    // },
    // {
    //   "id": 9,
    //   "name": "Glenna Reichert",
    //   "username": "Delphine",
    //   "email": "Chaim_McDermott@dana.io",

    //   "city": "Bartholomebury",


    //   "phone": "(775)976-6794 x41206",
    //   "website": "conrad.com",

    // },
    // {
    //   "id": 10,
    //   "name": "Clementina DuBuque",
    //   "username": "Moriah.Stanton",
    //   "email": "Rey.Padberg@karina.biz",

    //   "city": "Lebsackbury",


    //   "phone": "024-648-3804",
    //   "website": "ambrose.net",

    // }
    {
      id:1,
      fname:'sonu',
      lname:'kumar',
      skills:['c','c++','java','react','angular'],
      address:{
        city:'mzn',
        state:'up',
        pin:251202
      }
    },
    {
      id:2,
      fname:'monu',
      lname:'kumar',
      skills:['c','c++','react','angular'],
      address:{
        city:'khatoli',
        state:'up',
        pin:251205
      }
    },
    {
      id:3,
      fname:'shalu',
      lname:'kumari',
      skills:['c','c++','java','react','angular','node js'],
      address:{
        city:'noida',
        state:'up',
        pin:201301
      }
    }
  ];
  isActive=true;

}
