import { Component } from '@angular/core';

@Component({
  selector: 'app-html-table-generator',
  templateUrl: './html-table-generator.component.html',
  styleUrls: ['./html-table-generator.component.css']
})
export class HtmlTableGeneratorComponent {
  rows: number = 3;
  cols: number = 3;
  tableHTML: string = '';

  generateTable() {
    let output = '<table border="1">\n';
    for (let i = 0; i < this.rows; i++) {
      output += '  <tr>\n';
      for (let j = 0; j < this.cols; j++) {
        output += `    <td>Row ${i + 1} Col ${j + 1}</td>\n`;
      }
      output += '  </tr>\n';
    }
    output += '</table>';
    this.tableHTML = output;
  }
}
