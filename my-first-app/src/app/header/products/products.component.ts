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
  @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value:string){
    this.newItemEvent.emit(value);
  }
  }
//   @Input() strrecived:any;


