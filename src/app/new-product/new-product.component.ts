import { Component } from '@angular/core';
import { ProductService } from '../services/api/Products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  newProduct: ProductRepresentation = {};

  constructor(
    private service: ProductService,
    private router: Router
  ) { }

  saveProduct(): void {
    this.service.createProduct(this.newProduct).subscribe({
      next: (result: ProductRepresentation): void => {
        console.log(result);  
        this.router.navigate(['products']);
      },
      error: (error: any): void => {
        console.error(error);
      }
    });
  }

}
