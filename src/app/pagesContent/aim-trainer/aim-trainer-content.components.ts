import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AimPointComponent } from './components/aim-point/aim-point.component';

@Component({
  selector: 'AimTrainerContent',
  standalone: true,
  imports: [CommonModule, AimPointComponent],
  templateUrl: './aim-trainer-content.component.html',
  styleUrl: './aim-trainer-content.component.scss'
})

export class AimtrainerContentComponent {
  currentPointX: string = '0';
  currentPointY: string = '0';
  points = [{
    currentX: this.currentPointX,
    currentY: this.currentPointY,
  }]

  createPoint() {
    this.currentPointX = `${Math.random() * (window.innerWidth - 100)}px`
    this.currentPointY = `${Math.random() * (window.innerHeight - 100)}px`

    this.points.push({
      currentX: this.currentPointX,
      currentY: this.currentPointY,
    })
  }

  destroyPoint() {
    this.points = []
    this.createPoint()
  }
}
