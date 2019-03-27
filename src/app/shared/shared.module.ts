import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { TestComponent } from './shared-component/test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponentComponent, TestComponent]
})
export class SharedModule { }
