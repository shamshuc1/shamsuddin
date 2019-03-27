import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  { path: '', component: HomeOneComponent },
   {path:'', component:Home2Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
