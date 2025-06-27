import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroSectionComponent {
  @ViewChild('hero') heroRef!: ElementRef<HTMLDivElement>;
  @ViewChild('text') textRef!: ElementRef<HTMLDivElement>;
  @ViewChild('background') backgroundRef!: ElementRef<HTMLDivElement>;

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.heroRef || !this.textRef || !this.backgroundRef) return;

    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.8;
    const textParallax = scrolled * 0.8;

    this.backgroundRef.nativeElement.style.transform = `translateY(${parallax}px)`;
    this.textRef.nativeElement.style.transform = `translateY(${textParallax}px)`;
  }

  scrollToNext(): void {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
