import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeToImageConverterComponent } from './code-to-image-converter.component';

describe('CodeToImageConverterComponent', () => {
  let component: CodeToImageConverterComponent;
  let fixture: ComponentFixture<CodeToImageConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeToImageConverterComponent]
    });
    fixture = TestBed.createComponent(CodeToImageConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
