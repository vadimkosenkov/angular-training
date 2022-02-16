import { TestBed } from '@angular/core/testing';

import { MyinterseptorService } from './myinterseptor.service';

describe('MyinterseptorService', () => {
  let service: MyinterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyinterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
