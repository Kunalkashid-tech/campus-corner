import { Component } from '@angular/core';

@Component({
  selector: 'app-html-encoder-decoder',
  templateUrl: './html-encoder-decoder.component.html',
  styleUrls: ['./html-encoder-decoder.component.css']
})
export class HtmlEncoderDecoderComponent {
  inputText: string = '';
  outputText: string = '';

  encodeHTML() {
    this.outputText = this.inputText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  decodeHTML() {
    this.outputText = this.inputText
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
}
