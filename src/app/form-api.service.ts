import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {
  token: any;
  currentUser = new BehaviorSubject(null);
  currentUserInfo: any;
  constructor(private _http: HttpClient,private _router:Router) {
if(localStorage.getItem('user-token')!=null)
{
  this.saveCurrentUser();
}
  }
  isLogedOut() {
    this.currentUser.next(null);
    localStorage.removeItem('user-token');
    this._router.navigateByUrl('/login');
    this.currentUserInfo = this.currentUser

  }
  saveCurrentUser() {
    this.token = localStorage.getItem('user-token')

    this.currentUser.next(jwtDecode(this.token));
    this.currentUserInfo = this.currentUser;
    this.currentUserInfo=this.currentUserInfo._value.first_name
    console.log(this.currentUserInfo);
  }
  register(registerData: any): Observable<any> {
    return this._http.post('https://route-egypt-api.herokuapp.com/signup', registerData);
  }
  login(loginData: any): Observable<any> {
    return this._http.post('https://route-egypt-api.herokuapp.com/signin', loginData);

  }
}


