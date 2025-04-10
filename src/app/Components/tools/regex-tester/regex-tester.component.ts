import { Component } from '@angular/core';

@Component({
  selector: 'app-regex-tester',
  templateUrl: './regex-tester.component.html',
  styleUrls: ['./regex-tester.component.css']
})
export class RegexTesterComponent {
  regexPattern = '';
  textToTest = '';
  matches: string[] = [];

  testRegex() {
    try {
      const regex = new RegExp(this.regexPattern, 'g');
      const matchArray = [];
      let match;

      while ((match = regex.exec(this.textToTest)) !== null) {
        matchArray.push(match[0]);
      }

      this.matches = matchArray;
    } catch (e) {
      this.matches = [];
      alert('Invalid Regular Expression');
    }
  }
}
