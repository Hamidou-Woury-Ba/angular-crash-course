import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/api/Products/product.service';
import { CommonModule } from '@angular/common';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent{

  @Input()
  product : ProductRepresentation = {}

  constructor(
  ) {
  }

}
