import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMonitorToolComponent } from './performance-monitor-tool.component';

describe('PerformanceMonitorToolComponent', () => {
  let component: PerformanceMonitorToolComponent;
  let fixture: ComponentFixture<PerformanceMonitorToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceMonitorToolComponent]
    });
    fixture = TestBed.createComponent(PerformanceMonitorToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
