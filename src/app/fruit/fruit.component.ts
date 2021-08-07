import { Component, OnInit } from '@angular/core';
import { GetMealsService } from '../get-meals.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  fruit: any[] = [];
  constructor(private _getMealsService:GetMealsService,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    _getMealsService.getRecipes('passion fruit').subscribe((data)=>
    {
      this.fruit = data.recipes;
      setTimeout(() => {
        
        this.spinner.hide();
      }, 1000);
    })
  }

  ngOnInit(): void {
  }

}
