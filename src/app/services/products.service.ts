import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/product';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  controllerUrl:string = `${enviroment.apiUrl}/products`;

  
  constructor(private httpClient:HttpClient) { }


  getListWithPageination(pagination:number, selectedProductCategoryId:number|null): Observable<Products[]>{
    if(selectedProductCategoryId == null){
      return this.httpClient.get<Products[]>(this.controllerUrl+"?_page="+pagination+"&_limit=9")
    }else{
      return this.httpClient.get<Products[]>(this.controllerUrl+"?_page="+pagination+"&_limit=9&categoryId="+selectedProductCategoryId);
    }
  }
}
