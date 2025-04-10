import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-screen-capture-tool',
  templateUrl: './screen-capture-tool.component.html',
  styleUrls: ['./screen-capture-tool.component.css']
})
export class ScreenCaptureToolComponent {
  @ViewChild('screenVideo') screenVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('downloadLink') downloadLink!: ElementRef<HTMLAnchorElement>;

  stream: MediaStream | undefined;

  async startCapture() {
    try {
      this.stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      this.screenVideo.nativeElement.srcObject = this.stream;
      this.screenVideo.nativeElement.style.display = 'block';
      document.getElementById('startCapture')!.style.display = 'none';
      document.getElementById('captureBtn')!.style.display = 'inline-block';
    } catch (err) {
      console.error('Error:', err);
    }
  }

  captureImage() {
    const video = this.screenVideo.nativeElement;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d')!;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.style.display = 'block';
    this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
    this.downloadLink.nativeElement.style.display = 'inline-block';
  }
}
