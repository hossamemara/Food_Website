import { Component, OnInit } from '@angular/core';
import { GetMealsService } from '../get-meals.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent implements OnInit {
  pasta: any[] = [];

  constructor(private _getMealsService:GetMealsService,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    _getMealsService.getRecipes('pasta').subscribe((data)=>
    {
      
      this.pasta=data.recipes
      setTimeout(() => {
        
        this.spinner.hide();
      }, 1000);
    })
  }

  ngOnInit(): void {
  }

}
