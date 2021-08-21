
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] = [];
  dataLoaded : boolean = false;

  constructor(private productServie:ProductService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['categoryId']){
        this.getProductsByCategoryId(params['categoryId']);
      }
      else{
        this.getProducts();
      }
    })
  }

  getProducts(){
    this.productServie.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategoryId(categoryId : number){
    this.productServie.getProductsByCategoryId(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

}
