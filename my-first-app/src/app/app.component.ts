import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  imgUrl=".././assets/imgs/latte-image.png"

  count=0;
counterval(){
  this.count++;

}
fname="";
fillname(){
  this.fname="purva"
}
}
