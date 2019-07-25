import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListingPage } from './update-listing.page';

describe('UpdateListingPage', () => {
  let component: UpdateListingPage;
  let fixture: ComponentFixture<UpdateListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
