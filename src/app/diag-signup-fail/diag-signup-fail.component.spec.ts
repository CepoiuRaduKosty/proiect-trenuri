import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagSignupFailComponent } from './diag-signup-fail.component';

describe('DiagSignupFailComponent', () => {
  let component: DiagSignupFailComponent;
  let fixture: ComponentFixture<DiagSignupFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagSignupFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagSignupFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
