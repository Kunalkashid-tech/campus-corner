import { Component } from '@angular/core';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.css']
})
export class FoundersComponent {
  founders = [
    {
      name: 'Kunal Dilip Kashid',
      role: 'Full Stack Engineer',
      image: 'assets/images/Kunal Hover.png',
      linkedin: 'https://www.linkedin.com/in/kunal-kashid-8a9a11254'
    },
    {
      name: 'Avinash Waghmare',
      role: 'Web Developer – Security Expert',
      image: 'assets/images/Avinash Hover.png',
      linkedin: 'https://www.linkedin.com/in/avinash-waghmare-76a039271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Nimish Patole',
      role: 'Visual Designer',
      image: 'assets/images/Nimish Hover.png',
      linkedin: 'https://www.linkedin.com/in/nimish-patole-b1a02b24a'
    }
  ];
}
