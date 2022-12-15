import { GetListOptionsType } from 'src/app/shared/models/get-list-options';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/shared/models/product';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  controllerUrl:string = `${enviroment.apiUrl}/cart`;

  constructor(private httpClient:HttpClient) { }

  add(request: Products): Observable<Products> {
    return this.httpClient.post<Products>(this.controllerUrl, request);
  }


  getList(options?: GetListOptionsType): Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.controllerUrl)
  }

  delete(productId:number): Observable<Products> {
    return this.httpClient.delete<Products>(`${this.controllerUrl}/${productId}`);
  }
}
