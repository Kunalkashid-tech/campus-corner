import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-filter',
  templateUrl: './instagram-filter.component.html',
  styleUrls: ['./instagram-filter.component.css']
})
export class InstagramFilterComponent {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private originalImageData: ImageData | null = null;

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
  }

  loadImage(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = this.canvasRef.nativeElement;
        canvas.width = img.width;
        canvas.height = img.height;
        this.ctx.drawImage(img, 0, 0);
        this.originalImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  applyFilter(filter: string): void {
    if (!this.originalImageData) return;

    const imageData = this.ctx.createImageData(this.originalImageData);
    const data = imageData.data;
    const originalData = this.originalImageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = originalData[i];
      const g = originalData[i + 1];
      const b = originalData[i + 2];
      const a = originalData[i + 3];

      if (filter === 'grayscale') {
        const gray = 0.3 * r + 0.59 * g + 0.11 * b;
        data[i] = data[i + 1] = data[i + 2] = gray;
      } else if (filter === 'sepia') {
        data[i] = 0.393 * r + 0.769 * g + 0.189 * b;
        data[i + 1] = 0.349 * r + 0.686 * g + 0.168 * b;
        data[i + 2] = 0.272 * r + 0.534 * g + 0.131 * b;
      } else if (filter === 'invert') {
        data[i] = 255 - r;
        data[i + 1] = 255 - g;
        data[i + 2] = 255 - b;
      } else {
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
      }
      data[i + 3] = a;
    }

    this.ctx.putImageData(imageData, 0, 0);
  }

  resetImage(): void {
    if (this.originalImageData) {
      this.ctx.putImageData(this.originalImageData, 0, 0);
    }
  }

  downloadImage(): void {
    const link = document.createElement('a');
    link.download = 'filtered-image.png';
    link.href = this.canvasRef.nativeElement.toDataURL();
    link.click();
  }
}
