import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponentFormComponent } from './quote-component-form.component';

describe('QuoteComponentFormComponent', () => {
  let component: QuoteComponentFormComponent;
  let fixture: ComponentFixture<QuoteComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
