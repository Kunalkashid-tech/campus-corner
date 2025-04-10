import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFormatterComponent } from './js-formatter.component';

describe('JsFormatterComponent', () => {
  let component: JsFormatterComponent;
  let fixture: ComponentFixture<JsFormatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsFormatterComponent]
    });
    fixture = TestBed.createComponent(JsFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
