import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { WishComponent } from './wish/wish.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin/home',
        pathMatch: "full"
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'home',
        component: WishComponent,
      },
      {
        path: 'products',
        component: ProductlistComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
