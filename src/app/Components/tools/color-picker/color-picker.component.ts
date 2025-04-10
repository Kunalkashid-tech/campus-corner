import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  selectedColor: string = '#000000';

  updateColor() {
    // This method is automatically triggered by [(ngModel)] and (input)
    // Additional logic can go here if needed
  }
}
