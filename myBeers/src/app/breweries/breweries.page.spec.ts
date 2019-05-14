import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesPage } from './breweries.page';

describe('BreweriesPage', () => {
  let component: BreweriesPage;
  let fixture: ComponentFixture<BreweriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreweriesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
