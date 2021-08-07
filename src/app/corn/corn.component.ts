import { Component, OnInit } from '@angular/core';
import { GetMealsService } from '../get-meals.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-corn',
  templateUrl: './corn.component.html',
  styleUrls: ['./corn.component.scss']
})
export class CornComponent implements OnInit {
  corn: any[] = [];

  constructor(private _getMealsService:GetMealsService,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    _getMealsService.getRecipes('corn').subscribe((data)=>
    {
      
     
      this.corn = data.recipes;
      setTimeout(() => {
        
        this.spinner.hide();
      }, 1000)

    })
  }
  ngOnInit(): void {
  }

}
