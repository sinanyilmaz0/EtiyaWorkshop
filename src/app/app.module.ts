import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizantionInterceptor } from './shared/interceptors/authorizantion.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryListPageComponent } from './features/pages/category-list-page/category-list-page.component';
import { CoreModule } from './core/core.module';
import { FilterProductPipe } from './shared/pipes/filter-product.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpInterceptor } from './shared/interceptors/http.interceptor';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { NgModule } from '@angular/core';
import { ProductFormComponent } from './features/product/product-form/product-form.component';
import { ProductFormPageComponent } from './features/pages/product-form-page/product-form-page.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { ProductModule } from './features/product/product.module';
import { CategoryModule } from './features/category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductFormComponent,
    ProductFormPageComponent,
    CategoryListPageComponent,
    FilterProductPipe,
  ],
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
