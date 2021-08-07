import { Component, OnInit } from '@angular/core';
import { FormApiService } from '../form-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isLogged:boolean=false
firstName:any='';
email:any='';
age:any='';
lastName:any='';

logOut()
{
  this._formApiService.isLogedOut();
  
}
  constructor(private _formApiService:FormApiService,private _router:Router) {
    _formApiService.currentUser.subscribe((data:any)=>
    {
      console.log(data)
      this.firstName=data?.first_name;
      this.age=data?.age;
      this.lastName=data?.last_name;
      this.email=data?.email;
if(_formApiService.currentUser.getValue()!=null)
{
  this.isLogged=true
}
else
{
  this.isLogged=false
}
{

}
    })
   }

  ngOnInit(): void {
 
    
  }

}
