import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEncoderDecoderComponent } from './url-encoder-decoder.component';

describe('UrlEncoderDecoderComponent', () => {
  let component: UrlEncoderDecoderComponent;
  let fixture: ComponentFixture<UrlEncoderDecoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlEncoderDecoderComponent]
    });
    fixture = TestBed.createComponent(UrlEncoderDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
