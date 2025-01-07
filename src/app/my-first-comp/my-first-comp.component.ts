import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from "../message-details/message-details.component";

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDetailsComponent],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  name : String = '';
  email : String = '';
  message : String = '';
  isSubmitted : boolean = false;
  messages : Array<any> = [];

  onSubmit() : void {
    this.isSubmitted = true;
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message
    });

    console.log(this.messages);
  }

  deleteMessage(index : number) : void {
    this.messages.splice(index, 1); // Supprimer un élément du tableau à l'index donné
  }
}
