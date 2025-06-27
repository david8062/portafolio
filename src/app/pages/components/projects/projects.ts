import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../../shared/components/badge/badge';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../../shared/components/button/button';
import { CardComponent } from '../../../shared/components/card/card';
@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent, LucideAngularModule, CardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsSectionComponent {


  constructor() {
  console.log('Componente ProjectsSectionComponent cargado');
}

  protected projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con panel de administración, sistema de pagos y gestión de inventario.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con métricas avanzadas y reportes automatizados.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['React', 'Django', 'Celery', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];
}