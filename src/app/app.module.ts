import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonDirective } from './directives/button.directive';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardCategoryListComponentComponent } from './components/dashboard-category-list-component/dashboard-category-list-component.component';
import { DashboardProductsListComponentComponent } from './components/dashboard-products-list-component/dashboard-products-list-component.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpInterceptor } from './interceptors/http.interceptor';
import { IfNotDirective } from './directives/if-not.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ToastrModule } from 'ngx-toastr';
import { UnlessDirective } from './directives/unless.directive';

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
    HighlightDirective,
    ButtonDirective,
    IfNotDirective,
    UnlessDirective,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
