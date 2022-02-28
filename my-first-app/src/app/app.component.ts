import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import {DatetimeService} from './datetime.service';
import { JsondataService } from './jsondata.service';
import { UserinfoService } from './userinfo.service';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imgUrl=".././assets/imgs/latte-image.png"
  userInfoData:any;

  jsondata:any;
  
  constructor(public dt:DatetimeService,private data:JsondataService){
  this.jsondata = this.data.jsondata;
  }
  user={
    "email":'',
    "password":'',
    "city":'',
    "address":'',
    "address2":'',
    "zip":''
  };

  onSubmitofform(user:any){
    console.log(user);

  }
  // from:any;
  // to:any;
  // price:any;

  //  printDays(from:any,to:any,price:any){

  //     this.from = new Date(from).getTime();
  //     this.to=new Date(to).getTime();
  //     let day =(this.to-this.from)/(1000*3600*24);
  //     console.log(from);
  //     console.log(to);
  //     console.log(day);
  //     console.log("total Amount : "+ (day*price));
    

  }
  // user:any={
  //   "email":'',
  //   "password":''
  // };
  // onSubmitForm(user:any){
  //     console.log(this.user)
  // }

//   num=0;
//   numberArray=[1,2,3,4,5,6,7,8,9,10];
//   multiplay(num:number){
//     this.numberArray=[1,2,3,4,5,6,7,8,9,10];
  
//     for(let i=1;i<10;i++)
//   {
//     this.numberArray[i] = this.numberArray[i]*num;
//   }
// }



  
  //  getdate = this.dt.today;
  // getdata = this.ui.getUserdata();
  

// count=0;
// counterval(){
// this.count++;

// }
// fname="";
// lname="";
// fillname(){
//   this.fname="";
//   this.lname="";


// fname="";
// aname="";
// able="true"
// gnumber=0;
// numArrays = [1,2,3,4,5,6,7,8,9,0];
// strArrays = ["abc","ert"];
//  strArrays=["purva","jia","jayaaaa","anshuuu"];
