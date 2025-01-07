import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from "../message-details/message-details.component";
import { MyFirstService } from '../services/my-first.service';

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

  constructor(
    private service : MyFirstService
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0; // Vérifier si le tableau de messages n'est pas vide
  }

  onSubmit() : void {
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });

    console.log(this.messages);
  }

  deleteMessage(index : number) : void {
    this.service.deleteMessage(index); // Supprimer un élément du tableau à l'index donné
  }
}
