import { TestBed } from '@angular/core/testing';

import { MessageboardPageService } from './messageboard-page.service';

describe('MessageboardPageService', () => {
  let service: MessageboardPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageboardPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
