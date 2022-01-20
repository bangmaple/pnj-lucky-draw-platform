import { TestBed } from '@angular/core/testing';

import { EventWinnersCsvExportService } from './event-winners-csv-export.service';

describe('EventWinnersCsvExportService', () => {
  let service: EventWinnersCsvExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventWinnersCsvExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
