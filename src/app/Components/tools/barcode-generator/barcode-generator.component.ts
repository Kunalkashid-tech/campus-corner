import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import * as JsBarcode from 'jsbarcode';


@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.css']
})
export class BarcodeGeneratorComponent implements AfterViewInit {
  barcodeText: string = '';

  ngAfterViewInit() {
    // Initial render
    this.generateBarcode();
  }

  generateBarcode() {
    if (!this.barcodeText) return;
    JsBarcode('#barcode', this.barcodeText, {
      format: 'CODE128',
      lineColor: '#000',
      width: 2,
      height: 100,
      displayValue: true
    });
    
  }
}
