import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
    tools = [
      { title: 'CSS Formatter', description: 'Format your CSS neatly.', link: '/tools/css-formatter' },
      { title: 'CSS Minifier', description: 'Minify your CSS for performance.', link: '/tools/css-minifier' },
      { title: 'Debugger', description: 'Debug your JavaScript code.', link: '/tools/debugger' },
      { title: 'Documentation Generator', description: 'Auto-generate docs.', link: '/tools/documentation-generator' },
      { title: 'Git Version Control', description: 'Git command reference.', link: '/tools/git-version-control' },
      { title: 'HTML Encoder/Decoder', description: 'Escape & unescape HTML.', link: '/tools/html-encoder-decoder' },
      { title: 'HTML Formatter', description: 'Format your HTML code.', link: '/tools/html-formatter' },
      { title: 'HTML Table Generator', description: 'Generate table code easily.', link: '/tools/html-table-generator' },
      { title: 'Instagram Filter', description: 'Apply CSS filters visually.', link: '/tools/instagram-filter' },
      { title: 'JS Formatter', description: 'Beautify your JavaScript.', link: '/tools/js-formatter' },
      { title: 'Lorem Ipsum Generator', description: 'Generate placeholder text.', link: '/tools/lorem-ipsum-generator' },
      { title: 'Package Manager', description: 'NPM & Yarn package utils.', link: '/tools/package-manager' },
      { title: 'Password Generator', description: 'Generate strong passwords.', link: '/tools/password-generator' },
      { title: 'Performance Monitor', description: 'Check site performance.', link: '/tools/performance-monitor-tool' },
      { title: 'QR Code Generator', description: 'Create QR codes instantly.', link: '/tools/qr-code' },
      { title: 'Regex Tester', description: 'Test your regex live.', link: '/tools/regex-tester' },
      { title: 'Screen Capture Tool', description: 'Capture web screenshots.', link: '/tools/screen-capture-tool' },
      { title: 'SHA512 Encrypt/Decrypt', description: 'Securely hash text.', link: '/tools/sha512-encrypt-decrypt' },
      { title: 'Task Runner', description: 'Manage tasks easily.', link: '/tools/task-runner' },
      { title: 'URL Encoder/Decoder', description: 'Encode and decode URLs.', link: '/tools/url-encoder-decoder' },
      { title: 'UUID Generator', description: 'Generate UUIDs quickly.', link: '/tools/uuid-generator' },
      { title: 'Barcode Generator', description: 'Generate barcodes easily.', link: '/tools/barcode-generator' },
      { title: 'Color Picker', description: 'Pick and copy color codes.', link: '/tools/color-picker' },
      { title: 'Code Editor', description: 'Edit code with syntax highlighting.', link: '/tools/code-editor' },
      { title: 'Code to Image Converter', description: 'Turn your code into shareable images.', link: '/tools/code-to-image-converter' },

    ];
  }
  

