import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  id=""
  name=""
  contact=""
  address=""
  email=""
  password=""
  dob=""

  constructor(private api:Apiservise){}
  read=()=>{
    let data={"name":this.name,"id":this.id,"address":this.address,"contact":this.contact,"email":this.email,"password":this.password,"dob":this.dob}
    console.log(data)
    this.api.userregister(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.status=="success"){
          alert("User Registerd successfully")
          this.name=""
          this.address=""
          this.email=""
          this.contact=""
          this.password=""
          this.dob=""
        }else{
          alert("something went wrong")
        }
      }
    )
  }
}
