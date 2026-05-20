import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Static data - no event handling (per assignment requirements)
  contactInfo = [
    { icon: '📧', label: 'School Email', value: '28638@stu.ipbeja.pt' },
    { icon: '✉️', label: 'Personal Email', value: 'soufianeachouch09@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Gedimino pr. 45, Vilnius, Lithuania' },
    { icon: '📞', label: 'Phone', value: '+370 600 00000' },
    { icon: '💬', label: 'Skype', value: 'soufiane.achouch' },
    { icon: '🔗', label: 'Status', value: 'Open to internships & collaborations' },
  ];
}
