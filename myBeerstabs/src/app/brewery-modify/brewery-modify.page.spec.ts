import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryModifyPage } from './brewery-modify.page';

describe('BreweryModifyPage', () => {
  let component: BreweryModifyPage;
  let fixture: ComponentFixture<BreweryModifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryModifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryModifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
