import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter();

    additem(){
    this.newItemEvent.emit();
    // img1Url =".././assets/imgs/mocha-image.png";
    // img2Url =".././assets/imgs/mocha-image.png";
    // img3Url =".././assets/imgs/mocha-image.png";

    // description =false;
    // show_discription
  }
  }
//   @Input() strrecived:any;


