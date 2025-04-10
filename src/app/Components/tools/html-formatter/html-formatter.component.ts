import { Component } from '@angular/core';

@Component({
  selector: 'app-html-formatter',
  templateUrl: './html-formatter.component.html',
  styleUrls: ['./html-formatter.component.css']
})
export class HtmlFormatterComponent {
  htmlInput: string = '';
  htmlOutput: string = '';

  formatHTML() {
    this.htmlOutput = this.beautifyHTML(this.htmlInput);
  }

  beautifyHTML(html: string): string {
    const tab = '\t';
    let result = '';
    let indent = '';

    html.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }

      result += indent + '<' + element + '>\r\n';

      if (element.match(/^<?\w[^>]*[^\/]$/)) {
        indent += tab;
      }
    });

    return result.trim();
  }
}
