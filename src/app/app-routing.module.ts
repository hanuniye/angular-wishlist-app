import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: "", component: WishComponent,
  },
  {
    path: "contact", component: ContactComponent,
  },
  {
    path: "products", component: ProductlistComponent,
  },
  {
    path: "products/:id", component: ProductDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }