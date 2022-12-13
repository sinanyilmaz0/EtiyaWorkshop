import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../shared/models/supplier';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierServiceService {
  controllerUrl: string = `${enviroment.apiUrl}/suppliers`;

  constructor(private httpClient: HttpClient) {}
  getList(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.controllerUrl);
  }
}
