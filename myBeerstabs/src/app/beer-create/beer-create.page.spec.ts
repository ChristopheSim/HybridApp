import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreatePage } from './beer-create.page';

describe('BeerCreatePage', () => {
  let component: BeerCreatePage;
  let fixture: ComponentFixture<BeerCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
