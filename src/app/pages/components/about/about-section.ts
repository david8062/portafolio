import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../../shared/components/badge/badge';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutSectionComponent {}
