import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCaptureToolComponent } from './screen-capture-tool.component';

describe('ScreenCaptureToolComponent', () => {
  let component: ScreenCaptureToolComponent;
  let fixture: ComponentFixture<ScreenCaptureToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenCaptureToolComponent]
    });
    fixture = TestBed.createComponent(ScreenCaptureToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
