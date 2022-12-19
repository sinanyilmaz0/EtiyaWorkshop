import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { CategoryListPageComponent } from './features/category/pages/category-list-page/category-list-page.component';
import { DashboardCategoriesPageComponent } from './features/category/pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardProductsPageComponent } from './features/product/pages/dashboard-products-page/dashboard-products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { ProductFormPageComponent } from './features/product/pages/product-form-page/product-form-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'category/:categoryId', component: HomePageComponent },

  {
    path: 'dashboard', // Grand Parent route
    children: [
      {
        path: 'products', // Parent route
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: DashboardProductsPageComponent,
          },
          { path: 'add', component: ProductFormPageComponent }, //= dashboard/products/add
          { path: 'edit/:productId', component: ProductFormPageComponent },
        ],
      },
      {
        path: 'categories', // Parent route
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: DashboardCategoriesPageComponent,
          },
          { path: 'add', component: CategoryListPageComponent }, 
          { path: 'edit/:categoryId', component: CategoryListPageComponent },
        ],
      },
    ],
    canActivate: [AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
