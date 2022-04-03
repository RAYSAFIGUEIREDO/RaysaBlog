import { TestBed } from '@angular/core/testing';

import { AuthServicce } from './auth.service';

describe('AuthService', () => {
  let service: AuthServicce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
