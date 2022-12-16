import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardCategoriesPageComponent } from 'src/app/features/category/pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardCategoryListComponentComponent } from './components/dashboard-category-list-component/dashboard-category-list-component.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent,
    DashboardCategoriesPageComponent,
    DashboardCategoryListComponentComponent,
    CategoryListPageComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CategoryFormComponent,
    CategoryListComponent,
    DashboardCategoriesPageComponent,
    DashboardCategoryListComponentComponent,
  ]
})
export class CategoryModule { }
