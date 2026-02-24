import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Современный смартфон Apple с мощным процессором A16 и отличной камерой.',
      price: 499000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h3d/86311130824734.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h3d/86311130824734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/had/h9d/86311130857502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/h1e/86311130890270.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113137555/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Флагманский Android-смартфон с AMOLED-экраном и камерой 50 МП.',
      price: 389000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h12/84695573655582.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h12/84695573655582.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h42/84695573721118.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h0f/84695573786654.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-128gb-black-109181552/'
    }
  ];
}
