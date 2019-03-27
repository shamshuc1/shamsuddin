import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//import {ReactiveFormsModule, FormsModule,} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstTimeService } from './home/first-time.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    // FormsModule
    
  ],
  providers: [
    FirstTimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
