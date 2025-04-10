import { Component } from '@angular/core';

@Component({
  selector: 'app-css-formatter',
  templateUrl: './css-formatter.component.html',
  styleUrls: ['./css-formatter.component.css']
})
export class CssFormatterComponent {
  cssInput: string = '';
  cssOutput: string = '';

  formatCSS(): void {
    this.cssOutput = this.css_beautify(this.cssInput);
  }

  css_beautify(style: string): string {
    const options = {
      indent_size: 4,
      indent_char: ' ',
      selector_separator_newline: true,
      newline_between_rules: true
    };

    let formatted = '';
    let pad = 0;

    style = style.replace(/\s{2,}/g, ' ');
    style = style.replace(/(\s?)\{\s*/g, ' {\n');
    style = style.replace(/;(\s?)/g, ';\n' + ' '.repeat(pad * options.indent_size));
    style = style.replace(/\/\*/g, '\n/*');
    style = style.replace(/\*\//g, '*/\n');
    style = style.replace(/\}\s?/g, '}\n\n');

    const lines = style.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('}')) pad--;
      formatted += ' '.repeat(pad * options.indent_size) + lines[i] + '\n';
      if (lines[i].includes('{')) pad++;
    }

    return formatted.replace(/\n{2,}/g, '\n');
  }
}
