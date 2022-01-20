import { TestBed } from '@angular/core/testing';

import { LuckyUsersService } from './lucky-users.service';

describe('LuckyUsersService', () => {
  let service: LuckyUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuckyUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
