import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLinkComponent } from '../game-link/game-link.component';

@Component({
  selector: 'GamesList',
  standalone: true,
  imports: [CommonModule, GameLinkComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})
export class GamesListComponent {

}
