import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();
  author = 'Soufiane Achouch';

  links = [
    { label: 'About', anchor: '#about' },
    { label: 'Skills', anchor: '#skills' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Contact', anchor: '#contact' },
  ];

  socials = [
    { label: 'GitHub', href: 'https://github.com/SOUFIANEASH' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/soufiane-achouch' },
    { label: 'Skype', href: 'skype:soufiane.achouch' },
  ];
}
