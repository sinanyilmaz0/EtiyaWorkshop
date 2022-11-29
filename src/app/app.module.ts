import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    ProductsComponent,
    HomePageComponent,
    LoginPageComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
