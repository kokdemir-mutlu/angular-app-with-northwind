import { Category } from './category';
export interface Product{
  id : number;
  productName : string;
  unitPrice : number;
  unitsInStock : number;
  quantityPerUnit : string;
  category : Category;
}
