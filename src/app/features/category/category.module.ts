import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardCategoriesPageComponent } from 'src/app/features/pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardCategoryListComponentComponent } from './components/dashboard-category-list-component/dashboard-category-list-component.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent,
    DashboardCategoriesPageComponent,
    DashboardCategoryListComponentComponent,
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
