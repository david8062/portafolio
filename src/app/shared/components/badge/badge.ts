import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss']
})
export class BadgeComponent {
  @Input() color: 'cyan' | 'green' | 'purple' | 'pink' = 'cyan';
}
