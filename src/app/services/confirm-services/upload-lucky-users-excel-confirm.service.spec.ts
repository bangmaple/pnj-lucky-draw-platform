import { TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelConfirmService } from './upload-lucky-users-excel-confirm.service';

describe('UploadLuckyUsersExcelConfirmService', () => {
  let service: UploadLuckyUsersExcelConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadLuckyUsersExcelConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
