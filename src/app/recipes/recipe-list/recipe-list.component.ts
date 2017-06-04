import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mung Daal Recipe', 'This is a recipe of mung daal' , 'http://www.indobase.com/recipes/rec-images/moong-dal.jpg' ),
    new Recipe('Mung Daal Recipe', 'This is a recipe of mung daal' , 'http://www.indobase.com/recipes/rec-images/moong-dal.jpg' )


  ];

  constructor() { }

  ngOnInit() {
  }

}
