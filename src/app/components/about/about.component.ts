import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio = `Hello! I'm Soufiane Achouch, a 25-year-old Computer Science student at Vilnius College in Lithuania, originally from Morocco. I am passionate about web development, software engineering and open-source projects.`;

  bio2 = `I speak Arabic natively, and hold B2 certificates in both French and English. I'm open to collaborations, internships, and interesting projects.`;

  details = [
    { label: 'Name', value: 'Soufiane Achouch' },
    { label: 'Number', value: '28638' },
    { label: 'Role', value: 'CS Student & Developer' },
    { label: 'Location', value: 'Vilnius, Lithuania' },
    { label: 'Email', value: '28638@stu.ipbeja.pt' },
    { label: 'Availability', value: 'Open to internships' },
  ];
}
