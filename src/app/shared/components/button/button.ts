import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() tag: 'button' | 'a' = 'button';
  @Input() href?: string;
  @Input() target?: string;
}
