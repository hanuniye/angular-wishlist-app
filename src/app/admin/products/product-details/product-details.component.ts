import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  constructor(
    private params: ActivatedRoute,
    private productServices: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void | null {
    const id = this.params.snapshot.params['id'];
    if (!id) {
      return null;
    }
    this.productServices.getSingleProduct(+id).subscribe({
      next: (product: any) => {
        this.product = product;
      },
    });
  }

  goToProducts() {
    this.router.navigate(['admin/products'])
  }
}
