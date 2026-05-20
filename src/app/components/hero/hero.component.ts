import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name = 'Soufiane Achouch';
  role = 'Computer Science Student & Developer';
  tagline = 'Passionate about web development, software engineering and open-source projects. Based in Vilnius, Lithuania — originally from Morocco.';
}
