import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'GameLink',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-link.component.html',
  styleUrl: './game-link.component.scss'
})

export class GameLinkComponent {
  @Input() gameTitle: string;
  @Input() route: string;
  @Input() gameDescription: string;

  constructor() {
    
  }
}
