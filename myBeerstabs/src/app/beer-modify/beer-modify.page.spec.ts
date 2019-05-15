import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerModifyPage } from './beer-modify.page';

describe('BeerModifyPage', () => {
  let component: BeerModifyPage;
  let fixture: ComponentFixture<BeerModifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerModifyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerModifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
