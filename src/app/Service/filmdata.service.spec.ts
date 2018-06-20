import { TestBed, inject } from '@angular/core/testing';

import { FilmdDateService } from './filmdata.service';

describe('FilmdDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmdDateService]
    });
  });

  it('should be created', inject([FilmdDateService], (service: FilmdDateService) => {
    expect(service).toBeTruthy();
  }));
});
