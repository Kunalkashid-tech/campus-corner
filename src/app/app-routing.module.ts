import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ToolsComponent } from './Components/tools/tools.component';
import { NotesComponent } from './Components/notes/notes.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { LoginComponent } from './Components/project/login/login.component';
import { SidebarComponent } from './Components/project/sidebar/sidebar.component';
import { NavbarComponent } from './Components/project/navbar/navbar.component';
import { CssFormatterComponent } from './Components/tools/css-formatter/css-formatter.component';
import { CssMinifierComponent } from './Components/tools/css-minifier/css-minifier.component';
import { DebuggerComponent } from './Components/tools/debugger/debugger.component';
import { DocumentationGeneratorComponent } from './Components/tools/documentation-generator/documentation-generator.component';
import { GitVersionControlComponent } from './Components/tools/git-version-control/git-version-control.component';
import { HtmlEncoderDecoderComponent } from './Components/tools/html-encoder-decoder/html-encoder-decoder.component';
import { HtmlFormatterComponent } from './Components/tools/html-formatter/html-formatter.component';
import { HtmlTableGeneratorComponent } from './Components/tools/html-table-generator/html-table-generator.component';
import { InstagramFilterComponent } from './Components/tools/instagram-filter/instagram-filter.component';
import { JsFormatterComponent } from './Components/tools/js-formatter/js-formatter.component';
import { LoremIpsumGeneratorComponent } from './Components/tools/lorem-ipsum-generator/lorem-ipsum-generator.component';
import { PackageManagerComponent } from './Components/tools/package-manager/package-manager.component';
import { PasswordGeneratorComponent } from './Components/tools/password-generator/password-generator.component';
import { PerformanceMonitorToolComponent } from './Components/tools/performance-monitor-tool/performance-monitor-tool.component';
import { QrCodeComponent } from './Components/tools/qr-code/qr-code.component';
import { RegexTesterComponent } from './Components/tools/regex-tester/regex-tester.component';
import { ScreenCaptureToolComponent } from './Components/tools/screen-capture-tool/screen-capture-tool.component';
import { Sha512EncryptDecryptComponent } from './Components/tools/sha512-encrypt-decrypt/sha512-encrypt-decrypt.component';
import { TaskRunnerComponent } from './Components/tools/task-runner/task-runner.component';
import { UuidGeneratorComponent } from './Components/tools/uuid-generator/uuid-generator.component';
import { UrlEncoderDecoderComponent } from './Components/tools/url-encoder-decoder/url-encoder-decoder.component';
import { BarcodeGeneratorComponent } from './Components/tools/barcode-generator/barcode-generator.component';
import { CodeEditorComponent } from './Components/tools/code-editor/code-editor.component';
import { ColorPickerComponent } from './Components/tools/color-picker/color-picker.component';
import { CodeToImageConverterComponent } from './Components/tools/code-to-image-converter/code-to-image-converter.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'notes', component: NotesComponent},
  { path: 'blogs', component: BlogsComponent},
  { path:'project/login', component: LoginComponent},
  { path: 'project/sidebar', component: SidebarComponent},
  { path: 'project/navbar', component: NavbarComponent},
  { path: 'tools/css-formatter', component: CssFormatterComponent },
  { path: 'tools/css-minifier', component: CssMinifierComponent },
  { path: 'tools/debugger', component: DebuggerComponent },
  { path: 'tools/documentation-generator', component: DocumentationGeneratorComponent },
  { path: 'tools/git-version-control', component: GitVersionControlComponent },
  { path: 'tools/html-encoder-decoder', component: HtmlEncoderDecoderComponent },
  { path: 'tools/html-formatter', component: HtmlFormatterComponent },
  { path: 'tools/html-table-generator', component: HtmlTableGeneratorComponent },
  { path: 'tools/instagram-filter', component: InstagramFilterComponent },
  { path: 'tools/js-formatter', component: JsFormatterComponent },
  { path: 'tools/lorem-ipsum-generator', component: LoremIpsumGeneratorComponent },
  { path: 'tools/package-manager', component: PackageManagerComponent },
  { path: 'tools/password-generator', component: PasswordGeneratorComponent },
  { path: 'tools/performance-monitor-tool', component: PerformanceMonitorToolComponent },
  { path: 'tools/qr-code', component: QrCodeComponent },
  { path: 'tools/regex-tester', component: RegexTesterComponent },
  { path: 'tools/screen-capture-tool', component: ScreenCaptureToolComponent },
  { path: 'tools/sha512-encrypt-decrypt', component: Sha512EncryptDecryptComponent },
  { path: 'tools/task-runner', component: TaskRunnerComponent },
  { path: 'tools/url-encoder-decoder', component: UrlEncoderDecoderComponent },
  { path: 'tools/uuid-generator', component: UuidGeneratorComponent },
  { path: 'tools/barcode-generator', component: BarcodeGeneratorComponent },
  { path: 'tools/color-picker', component: ColorPickerComponent },
  { path: 'tools/code-editor', component: CodeEditorComponent },
  { path: 'tools/code-to-image-converter', component: CodeToImageConverterComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
