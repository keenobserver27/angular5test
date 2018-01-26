import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatArrayComponent } from './coat-array.component';

describe('CoatArrayComponent', () => {
  let component: CoatArrayComponent;
  let fixture: ComponentFixture<CoatArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
