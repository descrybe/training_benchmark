import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainPageComponent, RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'training_benchmark';
}
