import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { GetListOptionsType } from 'src/app/models/get-list-options';
import { Pagination } from 'src/app/models/pagination';
import { Products } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productCardClass: string = 'card col-3 me-2 mb-2';

  pagination: Pagination = {
    page: 1,
    pageSize: 9,
  };
  lastPage?: number;
  filters: any = { productFilterPrice: 0 };
  filterPrice!:number;
  products!: Products[];
  pricefilter:number = 0;
  selectedProductCategoryId: number | null = null;
  filterForm!: FormGroup;
  searchProductNameInput: string | null = null;
  filterProductPriceInput: number | null = null;

  // get filteredProducts(): any[] {
  //   let filteredProducts = this.products;
  //   if (this.products == null) return [];

  //   if (this.selectedProductCategoryId)
  //     filteredProducts = filteredProducts?.filter(
  //       (p) => p.categoryId === this.selectedProductCategoryId
  //     );

  //   if (this.searchProductNameInput)
  //     filteredProducts = filteredProducts?.filter((p) =>
  //       p.name
  //         .toLowerCase()
  //         .includes(this.searchProductNameInput!.toLowerCase())
  //     );

  //   return filteredProducts;
  // }

  errorAlertMessage: string | null = null;
  isLoading: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.isLoading = this.isLoading + 2;
    this.getCategoryIdFromRoute();
    this.getSearchProductNameFromRoute();
  
  }

  getProductsList(options?: GetListOptionsType): void {
    this.isLoading = this.isLoading + 1;
    this.productsService.getList(options).subscribe({
      next: (response) => {
        if (response.length < this.pagination.pageSize) {
          if (response.length === 0 && this.pagination.page > 1)
            this.pagination.page = this.pagination.page - 1;
          this.lastPage = this.pagination.page;
        }

        this.products = response;
        if(this.isLoading > 0)this.isLoading = this.isLoading - 1;
      },
      error: () => {
        this.errorAlertMessage = "Server Error. Couldn't get products list.";
        if(this.isLoading > 0) this.isLoading = this.isLoading - 1;
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  getCategoryIdFromRoute(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      this.resetPagination();

      if (params['categoryId']) {
        this.filters['categoryId'] = parseInt(params['categoryId']);
      } else {
        if (this.filters['categoryId']) delete this.filters['categoryId'];
      }

      if(this.isLoading > 0)this.isLoading = this.isLoading - 1;

      if(this.isLoading === 0){
        this.getProductsList({
          pagination: this.pagination,
          filters: this.filters,
        });
      }
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
      ) {
        this.searchProductNameInput = queryParams['searchProductName'];
        this.filters['name_like'] = this.searchProductNameInput;
      }

      if (
        queryParams['searchProductName'] === undefined &&
        this.searchProductNameInput !== null
      ) {
        this.searchProductNameInput = null;
        delete this.filters['name_like'];
      }
      this.isLoading = this.isLoading - 1;

      if(this.isLoading === 0){
        this.getProductsList({
          pagination: this.pagination,
          filters: this.filters,
        });
      }
    });
  }

  onSearchProductNameChange(event: any): void {

    this.filters['name_like'] = this.searchProductNameInput;
    this.resetPagination();

    const queryParams: any = {};
    if (this.searchProductNameInput !== '') 
      queryParams['searchProductName'] = this.searchProductNameInput;
    

    this.router.navigate([], {
      queryParams: queryParams,
    });

    
    this.getProductsList({
      pagination: this.pagination,
      filters: this.filters,
    });
  }



  changePage(page: number) {
    this.pagination.page = page;
    this.getProductsList({
      pagination: this.pagination,
      filters: this.filters,
    });
  }

  resetPagination(): void {
    this.pagination.page = 1;
    this.lastPage = undefined;
  }

  addToCartClick(product: Products) {
    console.log(
      'ProductListComponentden sepete eklenmesi istenen ürün:',
      product
    );
  }


  createProductForm(event : Event): void {
    this.filterPrice =Number((event.target as HTMLInputElement).value);
  }
}
