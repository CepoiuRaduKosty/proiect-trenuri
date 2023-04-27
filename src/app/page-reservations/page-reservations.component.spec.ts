import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservationsComponent } from './page-reservations.component';

describe('PageReservationsComponent', () => {
  let component: PageReservationsComponent;
  let fixture: ComponentFixture<PageReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
