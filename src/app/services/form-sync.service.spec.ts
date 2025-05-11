import { TestBed } from '@angular/core/testing';

import { FormSyncService } from './form-sync.service';

describe('FormSyncService', () => {
  let service: FormSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
