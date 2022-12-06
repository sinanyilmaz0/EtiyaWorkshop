import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardCategoryListComponentComponent } from './components/dashboard-category-list-component/dashboard-category-list-component.component';
import { DashboardProductsListComponentComponent } from './components/dashboard-products-list-component/dashboard-products-list-component.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    ProductsComponent,
    HomePageComponent,
    LoginPageComponent,
    LoadingSpinnerComponent,
    ProductFormComponent,
    ProductFormPageComponent,
    DashboardProductsPageComponent,
    DashboardProductsListComponentComponent,
    DashboardCategoriesPageComponent,
    DashboardCategoryListComponentComponent,
    ProductCardComponent,
    CategoryListPageComponent,
    CategoryFormComponent,
    FilterProductPipe,
    FilterProductByPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
