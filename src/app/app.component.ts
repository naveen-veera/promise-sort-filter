import { Component } from '@angular/core';
import {Model}from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arraySize:boolean = false;
  searchElement:any='';
  users:Array<Model>;
  database:Array<Model>=[
    {
      "firstName":"User1",
      "lastName":"user",
      "age":"21",
      "country":"India"
    },{
      "firstName":"User2",
      "lastName":"user",
      "age":"71",
      "country":"India"
    },{
      "firstName":"User3",
      "lastName":"user",
      "age":"41",
      "country":"US"
    },{
      "firstName":"User4",
      "lastName":"user",
      "age":"73",
      "country":"India"
    },{
      "firstName":"User5",
      "lastName":"user",
      "age":"41",
      "country":"China"
    }
    ,{
      "firstName":"User6",
      "lastName":"user",
      "age":"27",
      "country":"Canada"
    }
  ];
  constructor(){
    this.users=this.database;
  }
  ngOnit(){}
  // search the user with firstname,age>70 and from us,canada,india and singapore.
  search(){  
    this.users = this.database;
    if(this.searchElement === ''){
      this.users = this.database;
      this.arraySize=false;
    }else{
      this.users = this.database.filter(data=> data.firstName == this.searchElement);
      this.users = this.users.filter(data => data.age > 70);
      this.users = this.users.filter(data => (data.country == 'India' || data.country == 'US' || data.country == 'Singapore'|| data.country == 'Canada'));
      if(this.users.length === 0){
        this.arraySize = true;
      }else{
        this.arraySize=false;
      }
    }
    console.log(this.users);
  }

  // cloneing the users from canada and india
  clone(){
    this.users=this.database;
    this.users = this.database.filter(data => (data.country == 'India' || data.country=='Canada'));
    if(this.users.length === 0){
      this.arraySize = true;
    }else{
      this.arraySize=false;
    }
  }

  sortByName(){
    this.users = this.database;
    this.users.sort(function(a, b) {
      var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    console.log(this.users);
    
  }

  sortByCountry(){
    this.users = this.database;
    this.users.sort(function(a, b) {
      var nameA = a.country.toUpperCase(); // ignore upper and lowercase
      var nameB = b.country.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    console.log(this.users);
    
  }
}
