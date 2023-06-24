import { TestBed } from '@angular/core/testing';

import { RandomimgService } from './randomimg.service';

describe('RandomimgService', () => {
  let service: RandomimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
