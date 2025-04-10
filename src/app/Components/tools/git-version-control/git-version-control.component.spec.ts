import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitVersionControlComponent } from './git-version-control.component';

describe('GitVersionControlComponent', () => {
  let component: GitVersionControlComponent;
  let fixture: ComponentFixture<GitVersionControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitVersionControlComponent]
    });
    fixture = TestBed.createComponent(GitVersionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
