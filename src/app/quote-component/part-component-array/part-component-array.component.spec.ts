import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartComponentArray } from './part-component-array.component';

describe('QuoteComponentArrayComponent', () => {
  let component: PartComponentArray;
  let fixture: ComponentFixture<PartComponentArray>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartComponentArray ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartComponentArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
