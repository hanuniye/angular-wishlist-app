import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductsService, private router: Router){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products: any) => {
        this.products = products
      }
    })
  }

  goToProductDetails(id: any){
    this.router.navigate(['products', id])
  }
}
