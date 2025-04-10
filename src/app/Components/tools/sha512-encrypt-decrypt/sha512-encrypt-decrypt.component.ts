import { Component } from '@angular/core';

@Component({
  selector: 'app-sha512-encrypt-decrypt',
  templateUrl: './sha512-encrypt-decrypt.component.html',
  styleUrls: ['./sha512-encrypt-decrypt.component.css']
})
export class Sha512EncryptDecryptComponent {
  inputText: string = '';
  hashOutput: string = '';

  async generateHash() {
    if (!this.inputText.trim()) {
      alert('Please enter text to hash.');
      return;
    }

    const hashBuffer = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(this.inputText));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    this.hashOutput = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}
