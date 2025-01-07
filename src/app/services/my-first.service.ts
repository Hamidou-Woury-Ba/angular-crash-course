import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages : Array<any> = [];

  constructor() { 
    this.init(); // Initialiser les messages
  }

  init() : void {
    this.insert(
      { name: 'John Doe', email: 'doe@gmail.com', message: 'Message1' }
    );
    this.insert(
      { name: 'Marcel', email: 'marcel@gmail.com', message: 'Message2' }
    );
    this.insert(
      {name : 'Modou Diop', email : 'modou@gmail.com', message : 'Message3'}
    ); 
  }

  insert(message : { name : String, email : String, message : String }) : void {
    this.messages.push(message);
  }

  getAllMessages() : any[] {
    return this.messages;
  }

  deleteMessage(index : number) : void {
    this.messages.splice(index, 1);
  }
}
