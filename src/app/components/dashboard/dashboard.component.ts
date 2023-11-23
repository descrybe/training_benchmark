import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from '../games-list/games-list.component';

@Component({
  selector: 'Dashboard',
  standalone: true,
  imports: [CommonModule, GamesListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})

export class DashboardComponent {

}
