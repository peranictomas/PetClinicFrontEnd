import { TestBed } from '@angular/core/testing';

import { AppointmentPageService } from './appointment-page.service';

describe('AppointmentPageService', () => {
  let service: AppointmentPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
