import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryCreatePage } from './brewery-create.page';

describe('BreweryCreatePage', () => {
  let component: BreweryCreatePage;
  let fixture: ComponentFixture<BreweryCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
