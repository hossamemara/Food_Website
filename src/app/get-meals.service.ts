import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMealsService {
  getRecipes(meal: any): Observable<any> {
    return this._http.get(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  }
  constructor(private _http:HttpClient) { }
}
