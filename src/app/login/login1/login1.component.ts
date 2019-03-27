import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
activeForm:FormGroup
bg=[];
  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.activeForm = this._fb.group({

      firstName:['', Validators.required ],
      lastName:[''],
      age:[''],
      phoneNumber:['']
    });
  }
  save(dot){
    console.log(dot);

 }
}