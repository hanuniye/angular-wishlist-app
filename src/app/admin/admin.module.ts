import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsModule } from './products/products.module';
import { ContactModule } from './contact/contact.module';
import { WishModule } from './wish/wish.module';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule,
    ContactModule,
    WishModule
  ],
})
export class AdminModule { }
