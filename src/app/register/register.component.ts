import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormApiService } from '../form-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

FormApiService
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpInfo:any;
  registerDone() {
    this._formApiService.register(this.registerForm.value).subscribe((data) => {
      console.log(data)
      console.log(this.registerForm);
      if (this.registerForm.invalid) {
        return;
      }
      
      if(data.message=="success")
      {
        this._router.navigateByUrl('/login')
        this.showSuccess() 
        this.signUpInfo=data
      }
      else
      {
        this.registerForm.reset();
        this.signUpInfo=data
        this.showError()
      }
    })

    

  }
  registerForm: FormGroup = new FormGroup(
    {
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)])

    })


  constructor(private _formApiService: FormApiService,private _router:Router,private toastr: ToastrService) {



  }

  showSuccess() {
    this.toastr.success(`Congratulation Registeration Successed`, '', {
      timeOut: 1000,
    });
  }
  showError()
  {
   
    this.toastr.error(`${this.signUpInfo.message}`, 'Sign Up Error', {
      timeOut: 2000,
    });
  }

  ngOnInit(): void {
  }

}
