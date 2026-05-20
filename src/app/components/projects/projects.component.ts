import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Personal Website',
      description: 'A hand-coded personal website built with HTML5 semantic elements, following W3C accessibility guidelines. Includes four sections: Home, CV, Schedule, and Contact. Deployed on GitHub Pages.',
      tags: ['HTML5', 'CSS3', 'GitHub Pages'],
      link: 'https://soufianeash.github.io/Trab11/',
      featured: true
    },
    {
      id: 2,
      title: 'Tic-Tac-Toe Game',
      description: 'An interactive Tic-Tac-Toe game built in ReactJS with persistent score tracking across games, match history log, and animated win detection. Developed as Practical Work 10.',
      tags: ['React', 'Vite', 'CSS Modules'],
      link: 'https://github.com/SOUFIANEASH',
      featured: true
    },
    {
      id: 3,
      title: 'Personal Portfolio — ReactJS',
      description: 'A multi-page personal portfolio built with ReactJS and React Router. Data for each section (About, Portfolio, Contact) is fetched from JSON files using Fetch API and Axios. Developed as Practical Work 11.',
      tags: ['React', 'Vite', 'React Router', 'Axios'],
      link: 'https://github.com/SOUFIANEASH',
      featured: true
    },
    {
      id: 4,
      title: 'Personal Website — Angular',
      description: 'A component-based personal portfolio built with Angular 17, using standalone components, the new control flow syntax (@for, @if), and static data templates. Developed as Practical Work 12.',
      tags: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://github.com/SOUFIANEASH',
      featured: false
    }
  ];
}
