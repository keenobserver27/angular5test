import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponentArrayComponent } from './quote-component-array.component';

describe('QuoteComponentArrayComponent', () => {
  let component: QuoteComponentArrayComponent;
  let fixture: ComponentFixture<QuoteComponentArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteComponentArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponentArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
