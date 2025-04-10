import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEncoderDecoderComponent } from './html-encoder-decoder.component';

describe('HtmlEncoderDecoderComponent', () => {
  let component: HtmlEncoderDecoderComponent;
  let fixture: ComponentFixture<HtmlEncoderDecoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlEncoderDecoderComponent]
    });
    fixture = TestBed.createComponent(HtmlEncoderDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
