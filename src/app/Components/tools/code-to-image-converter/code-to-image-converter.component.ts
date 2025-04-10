import { Component } from '@angular/core';

@Component({
  selector: 'app-code-to-image-converter',
  templateUrl: './code-to-image-converter.component.html',
  styleUrls: ['./code-to-image-converter.component.css']
})
export class CodeToImageConverterComponent {
  code: string = '';
  imageSrc: string = '';
  imageGenerated: boolean = false;

  generateImage() {
    const code = this.code.trim();
    if (!code) {
      alert('Please enter some code.');
      return;
    }

    const lines = code.split('\n');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = 800;
    canvas.height = lines.length * 20 + 40;

    ctx.font = '14px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';

    lines.forEach((line, i) => {
      ctx.fillText(line, 10, 20 + i * 20);
    });

    this.imageSrc = canvas.toDataURL('image/png');
    this.imageGenerated = true;
  }

  downloadImage() {
    const imgURL = this.imageSrc.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    const link = document.createElement('a');
    link.download = 'code_image.png';
    link.href = imgURL;
    link.click();
  }
}
