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
      "country":"USA"
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
      this.users = [];
      this.database.forEach((data)=>{
        if(data.firstName === this.searchElement)
          this.users.push(data);
          this.arraySize = false;
      });
      if(this.users.length ===0)
        this.arraySize = true;
    }
    console.log(this.users);
    
    
  }

}
