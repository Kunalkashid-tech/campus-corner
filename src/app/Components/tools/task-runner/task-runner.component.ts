import { Component } from '@angular/core';

@Component({
  selector: 'app-task-runner',
  templateUrl: './task-runner.component.html',
  styleUrls: ['./task-runner.component.css']
})
export class TaskRunnerComponent {
  taskName: string = '';
  selectedRunner: string = 'gulp';
  scriptOutput: string = '';

  addTask() {
    if (!this.taskName.trim()) return;

    let taskScript = '';
    switch (this.selectedRunner) {
      case 'gulp':
        taskScript = `gulp.task('${this.taskName}', function() {\n  console.log('Running ${this.taskName} task');\n});\n\n`;
        break;
      case 'grunt':
        taskScript = `grunt.registerTask('${this.taskName}', function() {\n  console.log('Running ${this.taskName} task');\n});\n\n`;
        break;
      case 'npm':
        taskScript = `"${this.taskName}": "echo 'Running ${this.taskName} task'",\n`;
        break;
    }

    this.scriptOutput += taskScript;
    this.taskName = '';
  }
}
