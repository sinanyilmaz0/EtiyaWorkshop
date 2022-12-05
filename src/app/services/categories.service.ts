import { Category } from '../models/category';
import { GetListOptionsType } from '../models/get-list-options';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  controllerUrl:string = `${enviroment.apiUrl}/categories`;

  constructor(private httpClient:HttpClient) { }

  getList(options?: GetListOptionsType): Observable<Category[]>{
    let queryParams: any = {};

    if(options?.pagination){
      queryParams["_page"] = options.pagination.page;
      queryParams["_limit"] = options.pagination.pageSize;
    }
    if(options?.filters){
      queryParams = {...queryParams, ...options.filters};
    }

    return this.httpClient.get<Category[]>(this.controllerUrl, {
      params: queryParams,
    })
  }

  getById(id:number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.controllerUrl}/${id}`);
  }

  add(request: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.controllerUrl, request);
  }

  update(request: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.controllerUrl}/${request.id}`, request);
  }


  delete(categoryId: number): Observable<Category> {
    return this.httpClient.delete<Category>(
      `${this.controllerUrl}/${categoryId}`
    );
  }
}
