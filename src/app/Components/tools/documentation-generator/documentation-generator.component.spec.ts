import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationGeneratorComponent } from './documentation-generator.component';

describe('DocumentationGeneratorComponent', () => {
  let component: DocumentationGeneratorComponent;
  let fixture: ComponentFixture<DocumentationGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentationGeneratorComponent]
    });
    fixture = TestBed.createComponent(DocumentationGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
