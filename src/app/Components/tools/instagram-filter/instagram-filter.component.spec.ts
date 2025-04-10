import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramFilterComponent } from './instagram-filter.component';

describe('InstagramFilterComponent', () => {
  let component: InstagramFilterComponent;
  let fixture: ComponentFixture<InstagramFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramFilterComponent]
    });
    fixture = TestBed.createComponent(InstagramFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
