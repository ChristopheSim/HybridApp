import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDisplayPage } from './brewery-display.page';

describe('BreweryDisplayPage', () => {
  let component: BreweryDisplayPage;
  let fixture: ComponentFixture<BreweryDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
