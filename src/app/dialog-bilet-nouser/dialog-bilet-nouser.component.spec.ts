import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBiletNouserComponent } from './dialog-bilet-nouser.component';

describe('DialogBiletNouserComponent', () => {
  let component: DialogBiletNouserComponent;
  let fixture: ComponentFixture<DialogBiletNouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBiletNouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBiletNouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
