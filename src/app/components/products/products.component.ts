import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productCardClass: string = 'card col-3 me-2 mb-2';

  pagination: number = 2;

  products!: Products[];

  selectedProductCategoryId: number | null = null;
  searchProductNameInput: string | null = null;

  get filteredProducts(): any[] {
    let filteredProducts = this.products;
    if (this.products == null) return [];

    if (this.selectedProductCategoryId)
      filteredProducts = filteredProducts?.filter(
        (p) => p.categoryId === this.selectedProductCategoryId
      );

    if (this.searchProductNameInput)
      filteredProducts = filteredProducts?.filter((p) =>
        p.name
          .toLowerCase()
          .includes(this.searchProductNameInput!.toLowerCase())
      );
    return filteredProducts;
  }

  errorAlertMessage: string | null = null;
  isLoading: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCategoryIdFromRoute();
    this.getSearchProductNameFromRoute();
    this.getProductsListWithPagination(1);
  }

  getProductsListWithPagination(page: number) {
    
    if (page === 1) {
      this.pagination = 2;
      page = 1;
    } else this.pagination = page;

    this.isLoading = this.isLoading + 1;

    this.productsService
      .getListWithPageination(page, this.selectedProductCategoryId)
      .subscribe({
        next: (response) => {
          this.products = response;
          this.isLoading = this.isLoading - 1;
          
        },
        error: () => {
          this.errorAlertMessage = "Server Error. Couldn't get products list.";
          this.isLoading = this.isLoading - 1;
        },
        complete: () => {
          console.log('completed');
        },
      });
      
  }

  getCategoryIdFromRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId'])
        this.selectedProductCategoryId = parseInt(params['categoryId']);
      else this.selectedProductCategoryId = null;
    });
  }

  isProductCardShow(product: Products): boolean {
    return product.discontinued == false;
  }

  getSearchProductNameFromRoute(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (
        queryParams['searchProductName'] &&
        queryParams['searchProductName'] !== this.searchProductNameInput
      )
        this.searchProductNameInput = queryParams['searchProductName'];

      if (
        !queryParams['searchProductName'] &&
        this.searchProductNameInput !== null
      ) {
        this.searchProductNameInput = null;
      }
    });
  }

  onSearchProductNameChange(event: any): void {
    //this.searchProductNameInput = event.target.value;

    const queryParams: any = {};
    if (this.searchProductNameInput !== '')
      queryParams['searchProductName'] = this.searchProductNameInput;

    this.router.navigate([], {
      queryParams: queryParams,
    });
  }
}
