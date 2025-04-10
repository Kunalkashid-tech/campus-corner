import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsumGeneratorComponent } from './lorem-ipsum-generator.component';

describe('LoremIpsumGeneratorComponent', () => {
  let component: LoremIpsumGeneratorComponent;
  let fixture: ComponentFixture<LoremIpsumGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoremIpsumGeneratorComponent]
    });
    fixture = TestBed.createComponent(LoremIpsumGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
