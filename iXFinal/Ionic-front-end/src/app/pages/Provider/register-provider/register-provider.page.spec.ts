import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProviderPage } from './register-provider.page';

describe('RegisterProviderPage', () => {
  let component: RegisterProviderPage;
  let fixture: ComponentFixture<RegisterProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProviderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
