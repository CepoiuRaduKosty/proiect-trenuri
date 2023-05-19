import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListResultComponent } from './page-list-result.component';

describe('PageListResultComponent', () => {
  let component: PageListResultComponent;
  let fixture: ComponentFixture<PageListResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
