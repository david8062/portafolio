import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular'; // ⬅️ Importar el módulo
imports: [CommonModule, LucideAngularModule];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule], // ⬅️ Agregar aquí
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isOpen = false;
  activeSection = 'hero';

  navigationItems = [
    { title: 'Inicio', url: '#hero' },
    { title: 'Sobre Mí', url: '#about' },
    { title: 'Skills', url: '#skills' },
    { title: 'Experiencia', url: '#experience' },
    { title: 'Proyectos', url: '#projects' }
  ];

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Email', url: 'mailto:contact@example.com', icon: 'mail' },
    { name: 'Phone', url: 'tel:+1234567890', icon: 'phone' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isOpen = false;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + 100;
    for (const item of this.navigationItems) {
      const section = item.url.substring(1);
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
