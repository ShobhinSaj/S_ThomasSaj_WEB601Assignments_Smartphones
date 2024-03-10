import { TestBed } from '@angular/core/testing';

import { SmartPhoneService } from './smartphoneservice.service';

describe('ContentService', () => {
  let service: SmartPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
