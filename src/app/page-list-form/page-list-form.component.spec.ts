import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListFormComponent } from './page-list-form.component';

describe('PageListFormComponent', () => {
  let component: PageListFormComponent;
  let fixture: ComponentFixture<PageListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
