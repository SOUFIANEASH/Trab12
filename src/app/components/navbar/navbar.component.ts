import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLink } from '../../models/models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  links: NavLink[] = [
    { label: 'About', anchor: '#about' },
    { label: 'Skills', anchor: '#skills' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Contact', anchor: '#contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
