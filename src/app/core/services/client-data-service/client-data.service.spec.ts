import { TestBed } from '@angular/core/testing';

import { ClientDataService } from './client-data.service';

describe('ClientSelectionService', () => {
  let service: ClientDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
