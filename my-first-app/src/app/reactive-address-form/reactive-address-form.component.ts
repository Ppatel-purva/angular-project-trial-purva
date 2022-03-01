import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  myForm:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  this.myForm= new FormGroup({
    Firstname:new FormControl('purva'),
    Laststname:new FormControl(''),
    email:new FormControl(''),
    Password:new FormControl(''),
    City:new FormControl(''),
    Age:new FormControl(''),
  });
    this.myForm=this.fb.group({
    Firstname:['purva', Validators.required],
    Lastname:['patel', Validators.required],
    email:['', Validators.required],
    Password:['1234', Validators.required],
    City:['Ahmadabad', Validators.required],
    Age:['23', Validators.required],
  })
  }
}
