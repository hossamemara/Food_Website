import { Component, OnInit } from '@angular/core';
import { GetMealsService } from '../get-meals.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizza: any[] = [];
  constructor(private _getMealsService: GetMealsService,private spinner: NgxSpinnerService) {
    this.spinner.show();

    _getMealsService.getRecipes('pizza').subscribe((data) => {
      this.pizza = data.recipes;
      
      setTimeout(() => {
        
        this.spinner.hide();
      }, 1000);
    })
  }

  ngOnInit(): void {
  }

}
