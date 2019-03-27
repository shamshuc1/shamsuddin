import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeOneComponent } from './home-one/home-one.component';
import { Home2Component } from './home2/home2.component';
import { FirstTimeService } from './first-time.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Home3Component } from './home3/home3.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [HomeOneComponent, Home2Component, Home3Component],
  providers:[
    FirstTimeService
  ]
})
export class HomeModule { }
