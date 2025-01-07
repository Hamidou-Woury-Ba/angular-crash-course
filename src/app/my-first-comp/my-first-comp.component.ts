import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  name : String = '';
  email : String = '';
  message : String = '';
  isSubmitted : boolean = false;

  onSubmit() : void {
    this.isSubmitted = true;
  }
}
