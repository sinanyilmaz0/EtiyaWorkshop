import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoriesService } from 'src/app/features/category/services/categories.service';
import { Category } from 'src/app/shared/models/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoryForm!: FormGroup;
  categoryToUpdate: Category | null = null;

  get isEditting(): boolean {
    return this.categoryToUpdate !== null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.createCategoryForm();
    this.getCategoryIdFromRoute();
  }

  createCategoryForm(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [0, Validators.min(1)],
    });
  }

  getCategoryIdFromRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) this.getCategoryById(params['categoryId']);
    });
  }

  onProductFormSubmit(): void {
    if (this.categoryForm.invalid) {
      this.toastrService.error('Please fill in the form correctly');
      return;
    }
    if (this.isEditting) this.update();
    else this.add();
  }

  getCategoryById(categoryId: number) {
   
    this.categoryService.getById(categoryId).subscribe({
      next: (response) => {
        this.categoryToUpdate = response;
        this.categoryForm.patchValue(this.categoryToUpdate); 
      },
      error: () => {
        this.toastrService.error('Category not found');
        this.router.navigate(['/dashboard', 'categories']);
      },
    });
  }

  add(): void {
    const request: Category = {
      ...this.categoryForm.value,};

    this.categoryService.add(request).subscribe((response) => {
      this.toastrService.success('Category added successfully');
      this.router.navigate(['/dashboard', 'categories', 'edit', response.id]);
    });
  }

  update(): void {
    const request: Category = {
      id: this.categoryToUpdate!.id,
      name: this.categoryForm.value.name,
      description: this.categoryForm.value.descInput,
    };

    this.categoryService.update(request).subscribe((response) => {
      this.categoryToUpdate = response;
      this.toastrService.success('Product updated successfully');
    });
  }

  onDeleteProduct(): void {
    if (confirm('Are you sure you want to delete this category?') === false)
      return;

    this.delete();
  }

  delete(): void {
    this.categoryService.delete(this.categoryToUpdate!.id).subscribe(() => {
      this.toastrService.success('Product deleted successfully');
      this.router.navigate(['/dashboard', 'categories']);
    });
  }
}
