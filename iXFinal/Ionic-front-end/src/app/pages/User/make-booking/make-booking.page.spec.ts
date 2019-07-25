import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBookingPage } from './make-booking.page';

describe('MakeBookingPage', () => {
  let component: MakeBookingPage;
  let fixture: ComponentFixture<MakeBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
