import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlForGetProducts : string = 'http://localhost:8080/api';

  constructor(private httpClient : HttpClient) { }

  getProducts() : Observable<ListResponseModel<Product>> {
    let fullPath =  this.urlForGetProducts + '/products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(fullPath);
  }

  getProductsByCategoryId(categoryId : number) : Observable<ListResponseModel<Product>> {
    let fullPath = this.urlForGetProducts + '/products/getProductsByCategoryId?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(fullPath);
  }

}
