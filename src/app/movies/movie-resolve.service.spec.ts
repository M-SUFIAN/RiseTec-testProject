import { TestBed, inject } from '@angular/core/testing';

import { MovieResolveService } from './movie-resolve.service';

describe('MovieResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieResolveService]
    });
  });

  it('should be created', inject([MovieResolveService], (service: MovieResolveService) => {
    expect(service).toBeTruthy();
  }));
});
