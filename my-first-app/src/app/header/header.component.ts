import { Component, Input, OnInit } from '@angular/core';
import { MonoTypeOperatorFunction } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count=0;
  counters = ["0"];
  incrementcounter(newItem:string){
    this.counters.push(newItem);
    this.count++;
  }
  // @Input() strrecived:any;
//   @Input() count=0;
//  addcart(){
//  this.count++;
// }
}
