import { Component } from '@angular/core';

@Component({
  selector: 'app-package-manager',
  templateUrl: './package-manager.component.html',
  styleUrls: ['./package-manager.component.css']
})
export class PackageManagerComponent {
  selectedManager: string = 'npm';
  packageName: string = '';
  generatedCommand: string = '';

  generateCommand() {
    if (!this.packageName.trim()) {
      this.generatedCommand = 'Please enter a valid package name.';
      return;
    }

    switch (this.selectedManager) {
      case 'npm':
        this.generatedCommand = `npm install ${this.packageName}`;
        break;
      case 'yarn':
        this.generatedCommand = `yarn add ${this.packageName}`;
        break;
      case 'pip':
        this.generatedCommand = `pip install ${this.packageName}`;
        break;
      default:
        this.generatedCommand = 'Please select a package manager.';
    }
  }
}
