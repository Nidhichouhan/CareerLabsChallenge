import { TestBed } from '@angular/core/testing';

import { CoursetypeService } from './coursetype.service';

describe('CoursetypeService', () => {
  let service: CoursetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
