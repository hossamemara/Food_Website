import { TestBed } from '@angular/core/testing';

import { GetMealDetailsService } from './get-meal-details.service';

describe('GetMealDetailsService', () => {
  let service: GetMealDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMealDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
