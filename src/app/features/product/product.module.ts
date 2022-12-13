import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DashboardProductsPageComponent } from 'src/app/features/product/pages/dashboard-products-page/dashboard-products-page.component';
import { DashboardProductsListComponentComponent } from './components/dashboard-products-list-component/dashboard-products-list-component.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    DashboardProductsPageComponent,
    DashboardProductsListComponentComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductModule { }
