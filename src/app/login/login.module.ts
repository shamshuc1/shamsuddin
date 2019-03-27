import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import{ReactiveFormsModule} from "@angular/forms"
import { LoginRoutingModule } from './login-routing.module';
import { Login1Component } from './login1/login1.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
     ReactiveFormsModule
  ],
  declarations: [Login1Component]
})
export class LoginModule { }
