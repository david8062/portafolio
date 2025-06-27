import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skill-section',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss'
})
export class SkillSectionComponent {
  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 80, icon: '💚' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'Python/Django', level: 75, icon: '🐍' },
        { name: 'GraphQL', level: 70, icon: '🔗' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Redis', level: 70, icon: '🔴' },
        { name: 'Firebase', level: 75, icon: '🔥' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'CI/CD', level: 65, icon: '🔄' }
      ]
    }
  ];
}