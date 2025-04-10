import { Component } from '@angular/core';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.css']
})
export class DebuggerComponent {
  codeInput: string = '';
  debugOutput: string = '';

  generateDebugger(): void {
    this.debugOutput =
      `Debugger output for:\n\n${this.codeInput}\n\n======================================\n` +
      `Debugging information:\n` +
      `- Line 1: Something happened\n` +
      `- Line 2: Another issue found\n` +
      `- Line 3: Warning detected`;
  }
}
