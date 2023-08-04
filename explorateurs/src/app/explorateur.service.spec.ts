import { TestBed } from '@angular/core/testing';

import { ExplorateurService } from './explorateur.service';

describe('ExplorateurService', () => {
  let service: ExplorateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
