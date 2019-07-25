import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProviderPage } from './login-provider.page';

describe('LoginProviderPage', () => {
  let component: LoginProviderPage;
  let fixture: ComponentFixture<LoginProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginProviderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
