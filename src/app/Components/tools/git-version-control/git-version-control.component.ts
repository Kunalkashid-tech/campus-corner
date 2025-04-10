import { Component } from '@angular/core';

@Component({
  selector: 'app-git-version-control',
  templateUrl: './git-version-control.component.html',
  styleUrls: ['./git-version-control.component.css']
})
export class GitVersionControlComponent {
  commitMessage: string = '';
  output: string = '';
  repository: { message: string, timestamp: string }[] = [];

  initializeRepo() {
    this.repository = [];
    this.addToOutput('Initialized empty Git repository');
  }

  commitChanges() {
    if (!this.commitMessage.trim()) {
      alert('Please enter a commit message.');
      return;
    }

    const commit = {
      message: this.commitMessage,
      timestamp: new Date().toLocaleString()
    };

    this.repository.push(commit);
    this.addToOutput(`[master ${this.repository.length}] ${commit.message}`);
    this.commitMessage = '';
  }

  viewCommitHistory() {
    let output = `<strong>Commit History:</strong><br>`;
    this.repository.forEach((commit, index) => {
      output += `[${index + 1}] ${commit.message} - ${commit.timestamp}<br>`;
    });
    this.addToOutput(output);
  }

  addToOutput(message: string) {
    this.output += message + '<br>';
  }
}
