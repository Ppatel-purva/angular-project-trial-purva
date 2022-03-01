import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.css']
})
export class ReactFormsComponent implements OnInit {

  myForm:any;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
  
this.myForm= new FormGroup({
  name:new FormControl('purva'),
  email:new FormControl(''),
  message:new FormControl(''),
});


//   this.myForm=this.fb.group({
//     name:['purva', Validators.required],
//     email:['', Validators.required],
//     Message:['', Validators.required],

//   })
// }
  }
  onsubmit(form:FormGroup){
    console.log('Name',form.value.name)
    console.log('email',form.value.email)
    console.log('Message',form.value.Message)
}
}
