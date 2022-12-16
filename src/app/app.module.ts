import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizantionInterceptor } from './shared/interceptors/authorizantion.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from './features/cart/cart.module';
import { CategoryListPageComponent } from './features/category/pages/category-list-page/category-list-page.component';
import { CategoryModule } from './features/category/category.module';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpInterceptor } from './shared/interceptors/http.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ProductFormComponent } from './features/product/components/product-form/product-form.component';
import { ProductFormPageComponent } from './features/product/pages/product-form-page/product-form-page.component';
import { ProductModule } from './features/product/product.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    CoreModule,
    ProductModule,
    CategoryModule,
    CartModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizantionInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
