import { Component } from '@angular/core';
import {Model}from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arraySize:boolean = false;
  searchElement:any;
  users:Array<Model>;
  database:Array<Model>=[
    {
      "firstName":"Gowthaman",
      "lastName":"M",
      "age":"21",
      "country":"India"
    },{
      "firstName":"Gokul",
      "lastName":"Shakthi",
      "age":"21",
      "country":"India"
    },{
      "firstName":"Elon",
      "lastName":"Musk",
      "age":"41",
      "country":"US"
    },{
      "firstName":"Elon",
      "lastName":"Musk",
      "age":"73",
      "country":"India"
    },{
      "firstName":"Elon",
      "lastName":"Musk",
      "age":"41",
      "country":"China"
    }
  ];
  constructor(){
    this.users=this.database;
  }
  ngOnit(){}

  search(){  
    if(this.searchElement === ''){
      this.users = this.database;
    }else{
      // this.users = [];
      this.users = this.users.filter(data=> data.firstName == this.searchElement);
      this.users = this.users.filter(data => data.age > 70);
      this.users = this.users.filter(data => (data.country == 'India' || data.country == 'US' || data.country == 'Singapore'|| data.country == 'Canada'));
      if(this.users.length ===0)
        this.arraySize = true;
    }
    console.log(this.users);
    
    
  }

}
