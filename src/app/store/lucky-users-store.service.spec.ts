import { TestBed } from '@angular/core/testing';

import { LuckyUsersStoreService } from './lucky-users-store.service';

describe('LuckyUsersStoreService', () => {
  let service: LuckyUsersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuckyUsersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
