import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartComponentComponent } from './part-component.component';

describe('PartComponentComponent', () => {
  let component: PartComponentComponent;
  let fixture: ComponentFixture<PartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
