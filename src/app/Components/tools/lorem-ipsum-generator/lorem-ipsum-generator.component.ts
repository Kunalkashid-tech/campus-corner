import { Component } from '@angular/core';

@Component({
  selector: 'app-lorem-ipsum-generator',
  templateUrl: './lorem-ipsum-generator.component.html',
  styleUrls: ['./lorem-ipsum-generator.component.css']
})
export class LoremIpsumGeneratorComponent {
  paragraphCount: number = 1;
  generatedText: string[] = [];

  generateLoremIpsum() {
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    
    this.generatedText = Array(this.paragraphCount).fill(loremText);
  }
}
