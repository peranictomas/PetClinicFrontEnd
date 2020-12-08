import { TestBed } from '@angular/core/testing';

import { RolePageService } from './role-page.service';

describe('RolePageService', () => {
  let service: RolePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
