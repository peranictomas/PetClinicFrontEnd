import { TestBed } from '@angular/core/testing';

import { MessageBoardPageService } from './messageboard-page.service';

describe('MessageboardPageService', () => {
  let service: MessageBoardPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBoardPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
