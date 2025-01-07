import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {

  @Input() // Ceci est un décorateur qui permet de définir une propriété d'entrée pour le composant enfant 
  message : any = {}

  @Input()
  index : number = -1;

  @Output() // Ceci est un décorateur qui permet de définir une propriété de sortie pour le composant enfant 
  delete : EventEmitter<number> = new EventEmitter<number>(); // Émetteur d'événements pour la suppression d'un message 

  onDeleted() : void {
    this.delete.emit(this.index); // Émettre un événement de suppression avec l'index de l'élément à supprimer
  }

}
