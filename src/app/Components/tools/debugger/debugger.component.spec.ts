import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggerComponent } from './debugger.component';

describe('DebuggerComponent', () => {
  let component: DebuggerComponent;
  let fixture: ComponentFixture<DebuggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebuggerComponent]
    });
    fixture = TestBed.createComponent(DebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
