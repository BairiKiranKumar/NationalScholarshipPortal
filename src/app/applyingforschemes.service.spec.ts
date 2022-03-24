import { TestBed } from '@angular/core/testing';

import { ApplyingforschemesService } from './applyingforschemes.service';

describe('ApplyingforschemesService', () => {
  let service: ApplyingforschemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyingforschemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
