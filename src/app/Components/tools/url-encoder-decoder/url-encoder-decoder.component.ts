import { Component } from '@angular/core';

@Component({
  selector: 'app-url-encoder-decoder',
  templateUrl: './url-encoder-decoder.component.html',
  styleUrls: ['./url-encoder-decoder.component.css']
})
export class UrlEncoderDecoderComponent {
  inputText: string = '';
  outputText: string = '';

  encodeURL() {
    this.outputText = encodeURIComponent(this.inputText);
  }

  decodeURL() {
    this.outputText = decodeURIComponent(this.inputText);
  }
}
