import { TestBed } from '@angular/core/testing';

import { PaymentsPageService } from './payments-page.service';

describe('PaymentsPageService', () => {
  let service: PaymentsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
