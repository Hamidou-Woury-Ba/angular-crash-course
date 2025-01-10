import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/Products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    private service: ProductService
  ) {

  }

  // ngOnInit(): void {
  //     this.service.getAllProductsWithLimit().subscribe({
  //       next: (data : ProductRepresentation[]) : void => {
  //         console.log(data);
  //       }
  //     });
  // }

  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'test',
      description: 'test',
      category: 'test',
      image: 'https://some-image.jpg',
      price: 10,
    }
    this.service.createProduct(product).subscribe({
      next: (result: ProductRepresentation): void => {
        console.log(result);
      },
      error: (error: any): void => {
        console.error(error);
      }
    });
  }

}
