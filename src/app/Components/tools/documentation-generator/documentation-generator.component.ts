import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation-generator',
  templateUrl: './documentation-generator.component.html',
  styleUrls: ['./documentation-generator.component.css']
})
export class DocumentationGeneratorComponent {
  entryTitle: string = '';
  entryContent: string = '';
  entries: { title: string, content: string }[] = [];

  addEntry() {
    if (this.entryTitle && this.entryContent) {
      this.entries.push({ title: this.entryTitle, content: this.entryContent });
      this.entryTitle = '';
      this.entryContent = '';
    }
  }

  downloadDocumentation() {
    let text = '';
    this.entries.forEach(entry => {
      text += `${entry.title}\n${entry.content}\n\n`;
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'documentation.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
