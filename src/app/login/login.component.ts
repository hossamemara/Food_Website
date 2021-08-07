import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormApiService } from '../form-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firstName:any='';
  email:any='';
  age:any='';
  lastName:any='';
  loginForm:FormGroup=new FormGroup(
    {
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)])
    }
  )
  constructor(private _formApiService: FormApiService,private _router:Router,private toastr: ToastrService) {

    _formApiService.currentUser.subscribe((data:any)=>
    {
      console.log(data)
      this.firstName=data?.first_name;
      this.age=data?.age;
      this.lastName=data?.last_name;
      this.email=data?.email;

  });
}
  loginDone()
  {
    this._formApiService.login(this.loginForm.value).subscribe((data)=>
    {
      console.log(this.loginForm);
      console.log(data)

      if(this.loginForm.invalid)
      {
        return;
      }
      if(data.message=="success")
      {
        
        localStorage.setItem('user-token',data.token);
        this._formApiService.saveCurrentUser();
        this._router.navigateByUrl('/pizza')
        this.toastr.success(`Welcome ${this.firstName} ${this.lastName}`, '', {
          timeOut: 1000,
        });
        
        
      }
      else
      {
        this.loginForm.reset();
        this.toastr.error(`${data.message}`, 'Authentication Error', {
          timeOut: 2000,
        });
      }
    })
  }


  ngOnInit(): void {
  }

}
