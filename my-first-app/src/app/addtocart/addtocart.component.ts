import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  counter = 0;
  totalQuntity = 0;
  billAmount = 0;
  Data = [
    {
      "id":"",
      "name":"",
      "quentity":"",
      "price":"",
      "url":""
    },
  ];

  addItemToCart(product:any){
  this.Data.push(product);
  this.counter++;
  this.totalQuntity += Number(product.quentity);
  this.billAmount += Number(product.price);
}
}
