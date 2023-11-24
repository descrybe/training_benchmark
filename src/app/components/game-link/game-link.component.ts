import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'GameLink',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-link.component.html',
  styleUrl: './game-link.component.scss'
})

export class GameLinkComponent {
  @Input() gameTitle: string;
  @Input() gameDescription: string;

  constructor() {
    
  }
}
