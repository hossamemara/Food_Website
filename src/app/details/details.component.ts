import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMealDetailsService } from '../get-meal-details.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
mealDetails:any={};


  constructor(private _activatedRoute:ActivatedRoute,private _getMealDetailsService:GetMealDetailsService,private spinner: NgxSpinnerService) 
  {
    this.spinner.show();

    let id=_activatedRoute.snapshot.paramMap.get('id');
    _getMealDetailsService.getMealDetails(id).subscribe((data)=>
    {
     
      
this.mealDetails=data.recipe;
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 500);
    
    })
   }

  ngOnInit(): void {
  }

}
