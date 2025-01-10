import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/'

  constructor(
    private http : HttpClient
  ) { }

  getAllProductsWithLimit(limit : number = 5) : Observable<Array<ProductRepresentation>> {
    const productUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productUrl);
  }

  createProduct(product : ProductRepresentation) : Observable<ProductRepresentation> {
    const productUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productUrl, product);
  }

}
