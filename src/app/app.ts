import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { AboutSectionComponent } from './pages/components/about/about-section';
import { HeroSectionComponent } from './pages/components/hero/hero';
import { SkillSectionComponent } from './pages/components/skill/skill';
import { ExperienceSectionComponent } from './pages/components/experience/experience';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,AboutSectionComponent, HeroSectionComponent, SkillSectionComponent, ExperienceSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portafolio';
}
