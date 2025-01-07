import { Component, Input } from '@angular/core';

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

}
