import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  downloadSource() {
    window.open('assets/source-code/navbar-hover.zip', '_blank');
  }
  
}
