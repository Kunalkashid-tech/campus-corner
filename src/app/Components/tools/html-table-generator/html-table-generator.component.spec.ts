import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTableGeneratorComponent } from './html-table-generator.component';

describe('HtmlTableGeneratorComponent', () => {
  let component: HtmlTableGeneratorComponent;
  let fixture: ComponentFixture<HtmlTableGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlTableGeneratorComponent]
    });
    fixture = TestBed.createComponent(HtmlTableGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
