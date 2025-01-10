import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  constructor(
    private router: Router
  ) {
  }

  navigateToHome() : void {
    this.router.navigate(['/home']);
  }

  navigateToAbout() : void {
    this.router.navigate(['/about']);
  }

  navigateToNewProduct() : void {
    this.router.navigate(['/new-product']);
  }

  navigateToProduct() : void {
    this.router.navigate(['/products']);
  }

}
