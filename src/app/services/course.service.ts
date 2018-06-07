import { Injectable } from '@angular/core';
import {course} from '../course';
@Injectable()
export class CourseService {

private courses: course[];
  constructor() { 
    this.courses=[
      {
      name:"Angular 4",
      image:"angularjs.png",
      description:"Google single page APP framework",
      price:22000
    }
    ,{
      name:"ASP.net 2",
    image:"asp.net.png",
    description:"Microsfot Asp.net",
    price:12000
  }
    ,{
      name:"JAva",
    image:"JAva.png",
    description:"java basic and latest",
    price:13000
  } ,{
    name:"Konckout",
  image:"knockout.png",
  description:"konockout scripts ",
  price:20000
},{
  name:"React",
image:"React.png",
description:"React scripts ",
price:22000
}
,{
  name:"SQL",
image:"SQL.png",
description:"Structuarl query language",
price:10000
}
  ];
  }

  getCourses():course[]{
    return this.courses;
  }
}
