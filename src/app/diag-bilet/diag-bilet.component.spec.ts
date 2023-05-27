import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagBiletComponent } from './diag-bilet.component';

describe('DiagBiletComponent', () => {
  let component: DiagBiletComponent;
  let fixture: ComponentFixture<DiagBiletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagBiletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagBiletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
