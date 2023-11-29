import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AimtrainerContentComponent } from '../../../../pagesContent/aim-trainer/aim-trainer-content.components';

// TODO: add aliases

@Component({
  selector: 'AimTrainer',
  standalone: true,
  imports: [CommonModule, AimtrainerContentComponent],
  templateUrl: './aim-trainer.component.html',
  styleUrl: './aim-trainer.component.scss'
})

export class AimtrainerComponent {
  
}
