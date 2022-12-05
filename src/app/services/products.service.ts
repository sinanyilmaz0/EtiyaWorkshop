import { ActivatedRoute } from '@angular/router';
import { GetListOptionsType } from './../models/get-list-options';
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


  getList(options?: GetListOptionsType): Observable<Products[]>{
    let queryParams: any = {};

    if(options?.pagination){
      queryParams["_page"] = options.pagination.page;
      queryParams["_limit"] = options.pagination.pageSize;
    }
    if(options?.filters){
      queryParams = {...queryParams, ...options.filters};
    }

    return this.httpClient.get<Products[]>(this.controllerUrl, {
      params: queryParams,
    })
  }

  getById(productId: number): Observable<Products>{
    return this.httpClient.get<Products>(`${this.controllerUrl}/${productId}`)
  }

  add(request: Products): Observable<Products> {
    return this.httpClient.post<Products>(this.controllerUrl, request);
  }

  update(request: Products): Observable<Products> {
    return this.httpClient.put<Products>(`${this.controllerUrl}/${request.id}`, request);
  }

  delete(productId: number): Observable<Products> {
    return this.httpClient.delete<Products>(
      `${this.controllerUrl}/${productId}`
    );
  }
}
