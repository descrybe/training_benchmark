import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'MainPage',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent {

}
