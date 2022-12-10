import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {HttpClientModule}from'@angular/common/http';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NavloginComponent } from './navlogin/navlogin.component';
import { NavadminComponent } from './navadmin/navadmin.component';


const myRoute : Routes =[
{
  path:"",
  component:AdminLoginComponent
},
{
  path:"registration",
  component:UserRegistrationComponent
},
{
  path:"userlogin",
  component:UserloginComponent
},
{
  path:"viewprofile",
  component:ViewprofileComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserloginComponent,
    ViewprofileComponent,
    NavloginComponent,
    NavadminComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
