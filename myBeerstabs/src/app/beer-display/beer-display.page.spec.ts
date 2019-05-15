import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDisplayPage } from './beer-display.page';

describe('BeerDisplayPage', () => {
  let component: BeerDisplayPage;
  let fixture: ComponentFixture<BeerDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
