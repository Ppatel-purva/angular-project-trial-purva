import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-discription',
  templateUrl: './products-discription.component.html',
  styleUrls: ['./products-discription.component.css']
})
export class ProductsDiscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
discription=false;
show_discription(){
if (this.discription==false)
  this.discription=true;
}

}

