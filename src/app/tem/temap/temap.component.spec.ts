import { TestBed } from '@angular/core/testing';

import { MessageserviceService } from './temap.component';

describe('MessageserviceService', () => {
  let service: MessageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
