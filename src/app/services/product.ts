import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S25',
      description: 'Premium smartphone',
      price: 75000.99,
      image: 'image1.jpg',
      rating: 4.5,
      category: 'Mobile',
      stock: 10
    },
    {
      id: 2,
      name: 'Apple iPhone 15',
      description: 'Latest flagship smartphone',
      price: 99999.99,
      image: 'image2.jpg',
      rating: 4.8,
      category: 'Mobile',
      stock: 10
    },
    {
      id: 3,
      name: 'Google Pixel 8',
      description: 'Advanced Android smartphone',
      price: 69999.99,
      image: 'image3.jpg',
      rating: 4.3,
      category: 'Mobile',
      stock: 10
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}