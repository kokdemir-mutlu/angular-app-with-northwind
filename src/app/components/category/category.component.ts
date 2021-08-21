import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];
  // currentCategory : Category = {
  //   categoryId:0,
  //   categoryName:''
  // };// if strictPropertyInitializer is true

  currentCategory : Category = {categoryId : 0, categoryName : ''};// if strictPropertyInitialization is false
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response.data;
    })
  }

  setCurrentCategory(category : Category){
    console.log(category.categoryName);
    this.currentCategory = category;
  }

  getCurrentCategory(category : Category){
    if(category == this.currentCategory){
      return 'list-group-item active';
    }
    else{
      return 'list-group-item';
    }
  }

  getClassForAllProducts(){
    if(this.currentCategory.categoryId === 0){
      return "list-group-item active"
    }
    else{
      return 'list-group-item'
    }
  }

  allProductsClicked(event : any){
    this.currentCategory = {categoryId : 0, categoryName: ''};
  }

}
