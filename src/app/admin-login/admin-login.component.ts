import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""

  constructor(private route:Router){}

readvalue=()=>{
  let admin:any={"username":this.username,"Password":this.password}
  console.log(admin)
  if (this.username=="admin"&& this.password=="12345") {
    this.route.navigate(['/addproduct'])
  }
  else{
    alert("Invalid Credentials")
  }
} 

}
