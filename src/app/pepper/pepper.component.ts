import { Component, OnInit } from '@angular/core';
import { GetMealsService } from '../get-meals.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pepper',
  templateUrl: './pepper.component.html',
  styleUrls: ['./pepper.component.scss']
})
export class PepperComponent implements OnInit {
  pepper: any[] = [];
  constructor(private _getMealsService:GetMealsService,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    _getMealsService.getRecipes('green pepper').subscribe((data)=>
    {
      this.pepper=data.recipes;
      setTimeout(() => {
        
        this.spinner.hide();
      }, 1000);
    })
  }

  ngOnInit(): void {
  }

}
