import { TestBed } from '@angular/core/testing';
import { ClientService } from './client-service.service';



describe('ClientApiService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
