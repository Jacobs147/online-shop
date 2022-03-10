import { TestBed } from '@angular/core/testing';

import { ArtykulService } from './artykul.service';

describe('ArtykulService', () => {
  let service: ArtykulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtykulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
