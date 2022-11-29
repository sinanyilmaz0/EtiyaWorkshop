import { Category } from '../models/category';
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

  getList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.controllerUrl)
  }

  getById(id:number): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.controllerUrl}/${id}`);
  }
}
