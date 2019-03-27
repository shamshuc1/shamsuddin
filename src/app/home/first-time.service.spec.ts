import { TestBed, inject } from '@angular/core/testing';

import { FirstTimeService } from './first-time.service';

describe('FirstTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstTimeService]
    });
  });

  it('should be created', inject([FirstTimeService], (service: FirstTimeService) => {
    expect(service).toBeTruthy();
  }));
});
