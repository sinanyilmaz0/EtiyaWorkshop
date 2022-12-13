import { CategoriesService } from 'src/app/features/category/services/categories.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(private categoryService:CategoriesService){

  }
}


//ifnot core , nav shared, paignation shared 