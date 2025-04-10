import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMinifierComponent } from './css-minifier.component';

describe('CssMinifierComponent', () => {
  let component: CssMinifierComponent;
  let fixture: ComponentFixture<CssMinifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssMinifierComponent]
    });
    fixture = TestBed.createComponent(CssMinifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
