import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLinkComponent } from '../game-link/game-link.component';
import { gamesInfo } from '../../../constants/games';

@Component({
  selector: 'GamesList',
  standalone: true,
  imports: [CommonModule, GameLinkComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})

export class GamesListComponent {
  games = gamesInfo
}
