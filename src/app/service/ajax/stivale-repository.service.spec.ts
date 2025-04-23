import { TestBed } from '@angular/core/testing';

import { StivaleRepositoryService } from './stivale-repository.service';

describe('StivaleRepositoryService', () => {
  let service: StivaleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StivaleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
