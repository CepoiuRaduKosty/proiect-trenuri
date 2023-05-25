import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignupSuccessComponent } from './dialog-signup-success.component';

describe('DialogSignupSuccessComponent', () => {
  let component: DialogSignupSuccessComponent;
  let fixture: ComponentFixture<DialogSignupSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSignupSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSignupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
