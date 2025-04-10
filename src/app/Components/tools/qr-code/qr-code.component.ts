import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

declare var QRCode: any;

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})

export class QrCodeComponent implements AfterViewInit {
  
  qrText: string = '';
  downloadUrl: string = '';

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js';
    document.body.appendChild(script);
  }

  generateQRCode() {
    const container = document.getElementById('qrcode');
    if (!container) return;

    container.innerHTML = '';

    if (this.qrText.trim() === '') {
      alert('Please enter text or URL');
      return;
    }

    const qrcode = new QRCode(container, {
      text: this.qrText,
      width: 256,
      height: 256
    });

    setTimeout(() => {
      const canvas = container.querySelector('canvas');
      if (canvas) {
        this.downloadUrl = (canvas as HTMLCanvasElement).toDataURL('image/png');
      }
    }, 100);
  }
}
