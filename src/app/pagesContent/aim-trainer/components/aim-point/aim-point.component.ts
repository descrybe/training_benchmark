import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'AimPoint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aim-point.component.html',
  styleUrl: './aim-point.component.scss'
})

export class AimPointComponent {
  @Input() xCoord: string;
  @Input() yCoord: string;
  @Output() onClick = new EventEmitter();

  ngOnInit(): void{}

  onBubbleClick() {
    this.onClick.emit()
    console.log('xCoord', this.xCoord)
    console.log('yCoord', this.yCoord)
  }
}
