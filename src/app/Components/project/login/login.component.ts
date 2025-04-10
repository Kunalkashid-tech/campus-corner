import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  downloadSource() {
    window.open('assets/source-code/login-form.zip', '_blank');
  }
  
}
