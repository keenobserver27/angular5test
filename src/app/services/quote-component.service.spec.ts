import { TestBed, inject } from '@angular/core/testing';

import { QuoteComponentService } from './quote-component.service';

describe('QuoteComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteComponentService]
    });
  });

  it('should be created', inject([QuoteComponentService], (service: QuoteComponentService) => {
    expect(service).toBeTruthy();
  }));
});
