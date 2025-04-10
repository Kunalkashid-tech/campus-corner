import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ToolsComponent } from './Components/tools/tools.component';
import { BannerComponent } from './Components/banner/banner.component';
import { RecommendedCourseComponent } from './Components/recommended-course/recommended-course.component';
import { NotesComponent } from './Components/notes/notes.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { LoginComponent } from './Components/project/login/login.component';
import { SidebarComponent } from './Components/project/sidebar/sidebar.component';
import { NavbarComponent } from './Components/project/navbar/navbar.component';
import { FoundersComponent } from './Components/founders/founders.component';
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
import { UrlEncoderDecoderComponent } from './Components/tools/url-encoder-decoder/url-encoder-decoder.component';
import { UuidGeneratorComponent } from './Components/tools/uuid-generator/uuid-generator.component';
import { BarcodeGeneratorComponent } from './Components/tools/barcode-generator/barcode-generator.component';
import { ColorPickerComponent } from './Components/tools/color-picker/color-picker.component';
import { CodeEditorComponent } from './Components/tools/code-editor/code-editor.component';
import { CodeToImageConverterComponent } from './Components/tools/code-to-image-converter/code-to-image-converter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ToolsComponent,
    BannerComponent,
    RecommendedCourseComponent,
    NotesComponent,
    BlogsComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    FoundersComponent,
    CssFormatterComponent,
    CssMinifierComponent,
    DebuggerComponent,
    DocumentationGeneratorComponent,
    GitVersionControlComponent,
    HtmlEncoderDecoderComponent,
    HtmlFormatterComponent,
    HtmlTableGeneratorComponent,
    InstagramFilterComponent,
    JsFormatterComponent,
    LoremIpsumGeneratorComponent,
    PackageManagerComponent,
    PasswordGeneratorComponent,
    PerformanceMonitorToolComponent,
    QrCodeComponent,
    RegexTesterComponent,
    ScreenCaptureToolComponent,
    Sha512EncryptDecryptComponent,
    TaskRunnerComponent,
    UrlEncoderDecoderComponent,
    UuidGeneratorComponent,
    BarcodeGeneratorComponent,
    ColorPickerComponent,
    CodeEditorComponent,
    CodeToImageConverterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
