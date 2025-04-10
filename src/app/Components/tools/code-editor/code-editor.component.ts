import { Component } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent {
  htmlCode: string = '';
  cssCode: string = '';
  jsCode: string = '';
  activeEditor: string = 'html';

  showEditor(editor: string) {
    this.activeEditor = editor;
  }

  runCode() {
    const output = document.getElementById('output') as HTMLIFrameElement;
    const documentContent = `
      ${this.htmlCode}
      <style>${this.cssCode}</style>
      <script>${this.jsCode}<\/script>
    `;

    const doc = output.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(documentContent);
      doc.close();
    }
  }
}
