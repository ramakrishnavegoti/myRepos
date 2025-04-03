import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private appUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.appUrl}products`);
  }
}
