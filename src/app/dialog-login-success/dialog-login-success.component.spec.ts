import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginSuccessComponent } from './dialog-login-success.component';

describe('DialogLoginSuccessComponent', () => {
  let component: DialogLoginSuccessComponent;
  let fixture: ComponentFixture<DialogLoginSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
