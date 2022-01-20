import { TestBed } from '@angular/core/testing';

import { StartLuckydrawService } from './start-luckydraw.service';

describe('StartLuckydrawService', () => {
  let service: StartLuckydrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartLuckydrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
