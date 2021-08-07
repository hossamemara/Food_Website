import { Component, OnInit } from '@angular/core';
import { GetMealsService } from '../get-meals.service';
import { NgxSpinnerService } from "ngx-spinner";





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pizza:any;
  fruit:any;
  corn:any;
  pasta:any;
  
  constructor(private _getMealsService:GetMealsService,private spinner: NgxSpinnerService) { 
  

    
 
    this.spinner.show();

    _getMealsService.getRecipes('passion fruit').subscribe((data)=>
    {
      this.fruit = data.recipes;
      setTimeout(() => {
       
        this.spinner.hide();
      }, 1000);
    })
    _getMealsService.getRecipes('pizza').subscribe((data)=>
    {
      this.pizza = data.recipes;
    })
    _getMealsService.getRecipes('pasta').subscribe((data)=>
    {
      this.pasta = data.recipes;
    })
    _getMealsService.getRecipes('corn').subscribe((data)=>
    {
      this.corn = data.recipes;
    })
  }

  ngOnInit(): void {
  }

}
