import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sha512EncryptDecryptComponent } from './sha512-encrypt-decrypt.component';

describe('Sha512EncryptDecryptComponent', () => {
  let component: Sha512EncryptDecryptComponent;
  let fixture: ComponentFixture<Sha512EncryptDecryptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sha512EncryptDecryptComponent]
    });
    fixture = TestBed.createComponent(Sha512EncryptDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
