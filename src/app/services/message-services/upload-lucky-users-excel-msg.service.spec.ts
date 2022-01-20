import { TestBed } from '@angular/core/testing';

import { UploadLuckyUsersExcelMsgService } from './upload-lucky-users-excel-msg.service';

describe('UploadLuckyUsersExcelMsgServiceService', () => {
  let service: UploadLuckyUsersExcelMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadLuckyUsersExcelMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
