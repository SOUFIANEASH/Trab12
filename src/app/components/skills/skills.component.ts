import { Component } from '@angular/core';
import { Skill } from '../../models/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  activeCategory: string = 'all';

  categories = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Tools & Soft Skills' },
  ];

  skills: Skill[] = [
    { name: 'HTML5 & CSS3', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 82, category: 'frontend' },
    { name: 'React', level: 78, category: 'frontend' },
    { name: 'Vite', level: 72, category: 'frontend' },
    { name: 'REST APIs', level: 75, category: 'backend' },
    { name: 'Axios', level: 70, category: 'backend' },
    { name: 'Git & GitHub', level: 80, category: 'tools' },
    { name: 'Microsoft Office', level: 85, category: 'tools' },
    { name: 'Customer Service', level: 88, category: 'tools' },
    { name: 'Public Speaking', level: 75, category: 'tools' },
    { name: 'Team Leadership', level: 78, category: 'tools' },
    { name: 'Arabic (Native)', level: 100, category: 'tools' },
    { name: 'French (B2)', level: 72, category: 'tools' },
    { name: 'English (B2)', level: 72, category: 'tools' },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') return this.skills;
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  getWidth(level: number): string {
    return level + '%';
  }
}
