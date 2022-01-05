import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'list', component: ListingComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
