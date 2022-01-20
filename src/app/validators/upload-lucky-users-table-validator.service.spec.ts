import { TestBed } from '@angular/core/testing';

import { UploadLuckyUsersTableValidatorService } from './upload-lucky-users-table-validator.service';

describe('UploadLuckyUsersTableValidatorService', () => {
  let service: UploadLuckyUsersTableValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadLuckyUsersTableValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
