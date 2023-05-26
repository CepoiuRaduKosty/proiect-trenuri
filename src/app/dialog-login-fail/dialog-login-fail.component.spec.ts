import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginFailComponent } from './dialog-login-fail.component';

describe('DialogLoginFailComponent', () => {
  let component: DialogLoginFailComponent;
  let fixture: ComponentFixture<DialogLoginFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoginFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
