import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeListingPage } from './make-listing.page';

describe('MakeListingPage', () => {
  let component: MakeListingPage;
  let fixture: ComponentFixture<MakeListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
