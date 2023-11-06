import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private baseUrl = 'http://localhost:8000/products';

  private products: any[] = [
    {
      productId: '1',
      productName: 'Product 1',
      productImage1: 'image1.jpg',
      productImage2: 'image2.jpg',
      productDesc: 'Description of Product 1',
      productPrice: 119.99
    },
    {
      productId: '2',
      productName: 'Product 2',
      productImage1: 'image3.jpg',
      productImage2: 'image4.jpg',
      productDesc: 'Description of Product 2',
      productPrice: 129.99
    },
    {
      productId: '3',
      productName: 'Product 3',
      productImage1: 'image5.jpg',
      productImage2: 'image6.jpg',
      productDesc: 'Description of Product 3',
      productPrice: 139.99
    },
    {
      productId: '4',
      productName: 'Product 4',
      productImage1: 'image7.jpg',
      productImage2: 'image8.jpg',
      productDesc: 'Description of Product 4',
      productPrice: 339.99
    },
    // Add more products as needed
  ];

  constructor(private http: HttpClient) { }


  // Get a list of all products

  // getAllProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseUrl}`);
  // }

  getAllProducts() {
    return this.products;
  }

  // Get a single product by ID

  // getProductById(productId: string): Observable<any> {
  //   console.log("productId",productId);
  //   return this.http.get(`${this.baseUrl}/${productId}`);
  // }
  
  getProductById(productId: any) {
    return this.products.find(product => product.productId === productId);
  }

  // Create a new product

  // createProduct(product: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}`, product);
  // }

  createProduct(product: any) {
    const newProductId = this.products.length + 1;

    // Assign the new productId and add the product to the array
    product.productId = newProductId;
    this.products.push(product);
  }

  // Update a product

  // updateProduct(productId: any, product: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${productId}`, product);
  // }

  updateProduct(productId: any, product: any) {
    const index = this.products.findIndex(product => product.productId === product.productId);
    if (index !== -1) {
      this.products[index] = product;
    }
  }
  

  // Delete a product

  // deleteProduct(productId: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${productId}`);
 
    deleteProduct(productId: string){
      const index = this.products.findIndex(product => product.productId === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }

  }

