import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CategoriesService } from 'src/app/features/category/services/categories.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  title: string = 'Category List';

  categories!: Category[];

  private _categoriesListItems: any[] = [{ label: 'All', value: null }];

  get categoriesListItems(): any[] {
    if (this.categories === undefined) return this._categoriesListItems;
    return [
      ...this._categoriesListItems,
      ...this.categories.map((c) => {
        return { label: c.name, value: c.id };
      }),
    ];
  }

  //setter
  set categoriesListItems(value: any[]) {
    this._categoriesListItems = value;
  }

  selectedCategoryId: number | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSelectedCategoryIdFromRoute();
    this.getListCategories();
  }

  getListCategories() {
    this.categoriesService.getList().subscribe((response) => {
      this.categories = response;
    });
  }

  getSelectedCategoryIdFromRoute() {
    //Observer Desing Pattern
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId'] !== undefined) {
        this.selectedCategoryId = Number(params['categoryId']);
      }
    });
  }

  onSelectedCategory(categoryId: number | null): void {

    const route = ['/'];

    if (categoryId !== null)
      route.push('category', categoryId!.toString());

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.router.navigate(route, { queryParams }); // queryParams: queryParams
    });
  }

  isSelectedCategory(categoryId: any | null): boolean {
    return categoryId === this.selectedCategoryId;
  }
}
