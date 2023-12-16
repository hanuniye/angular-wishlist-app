import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [
    { id: 1, productName: "t-shirt", price: 100},
    { id: 2, productName: "jacket", price: 300},
    { id: 3, productName: "shoes", price: 500},
  ]

  constructor() { }

  getProducts(){
    return of(this.products)
  }

  getSingleProduct(id: any){
    return of(this.products.find(product => product.id === id))
  }
}
