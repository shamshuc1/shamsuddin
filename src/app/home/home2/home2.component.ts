import { Component, OnInit } from '@angular/core';
import {FirstTimeService} from '../first-time.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
   userForm:FormGroup
  constructor(private _service:FirstTimeService, private _Builder:FormBuilder) { }

  ngOnInit() {
 

  }

}
