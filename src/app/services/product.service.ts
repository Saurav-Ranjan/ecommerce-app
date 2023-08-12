import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/products';

  constructor(private http: HttpClient) { }


  // Get a list of all products
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Get a single product by ID
  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${productId}`);
  }


  // Create a new product
  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, product);
  }


  // Update a product
  updateProduct(productId: string, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }

  // Delete a product
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}
