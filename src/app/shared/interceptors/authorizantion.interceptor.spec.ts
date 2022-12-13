import { TestBed } from '@angular/core/testing';

import { AuthorizantionInterceptor } from './authorizantion.interceptor';

describe('AuthorizantionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthorizantionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthorizantionInterceptor = TestBed.inject(AuthorizantionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
