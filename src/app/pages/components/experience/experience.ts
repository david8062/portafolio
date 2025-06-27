import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar, MapPin } from 'lucide-angular';
import { BadgeComponent } from '../../../shared/components/badge/badge';
import { CardComponent } from '../../../shared/components/card/card';
@Component({
 selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule,  BadgeComponent, LucideAngularModule, CardComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceSectionComponent {

  expandedIndex: number | null = 0;
 experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Madrid, España',
      period: '2022 - Presente',
      description:
        'Lidero el desarrollo de aplicaciones web escalables usando React, Node.js y AWS. Implementé arquitecturas de microservicios que mejoraron el rendimiento en un 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
      current: true
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Barcelona, España',
      period: '2020 - 2022',
      description:
        'Desarrollé desde cero una plataforma de e-commerce que maneja más de 10,000 usuarios activos. Colaboré estrechamente con el equipo de diseño para crear interfaces intuitivas.',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
      current: false
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Valencia, España',
      period: '2019 - 2020',
      description:
        'Creé sitios web responsivos y aplicaciones web para diversos clientes. Optimicé el rendimiento web logrando puntuaciones de 95+ en Google PageSpeed.',
      technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Firebase'],
      current: false
    }
  ];

   toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
