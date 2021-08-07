import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMealDetailsService {

  constructor(private _http:HttpClient) { }
  getMealDetails(id:any):Observable<any>
  {

     return this._http.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
  }
}
