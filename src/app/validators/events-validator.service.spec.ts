import { TestBed } from '@angular/core/testing';

import { EventsValidatorService } from './events-validator.service';

describe('EventsValidatorService', () => {
  let service: EventsValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
