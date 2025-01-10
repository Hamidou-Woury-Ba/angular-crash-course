import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductService } from '../services/api/Products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  products: ProductRepresentation[] = [];

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (data : ProductRepresentation[]) : void => {
        this.products = data;
      }
    });
}

}
