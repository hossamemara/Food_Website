import { TestBed } from '@angular/core/testing';

import { GetMealsService } from './get-meals.service';

describe('GetMealsService', () => {
  let service: GetMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
