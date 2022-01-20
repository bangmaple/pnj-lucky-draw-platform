import { TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelValidatorService } from './upload-lucky-users-excel-validator.service';

describe('UploadLuckyUsersExcelValidatorService', () => {
  let service: UploadLuckyUsersExcelValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadLuckyUsersExcelValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
