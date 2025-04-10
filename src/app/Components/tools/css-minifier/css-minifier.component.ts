import { Component } from '@angular/core';

@Component({
  selector: 'app-css-minifier',
  templateUrl: './css-minifier.component.html',
  styleUrls: ['./css-minifier.component.css']
})
export class CssMinifierComponent {
  cssInput: string = '';
  cssOutput: string = '';

  minifyCSS(): void {
    let minifiedCSS = this.cssInput;

    // Remove comments
    minifiedCSS = minifiedCSS.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove whitespace and format
    minifiedCSS = minifiedCSS.replace(/\s{2,}/g, ' ');
    minifiedCSS = minifiedCSS.replace(/\s*([{}:;,])\s*/g, '$1');
    minifiedCSS = minifiedCSS.replace(/;}/g, '}');

    this.cssOutput = minifiedCSS;
  }
}
