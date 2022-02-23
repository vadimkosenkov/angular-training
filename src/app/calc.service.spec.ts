import { TestBed } from "@angular/core/testing";

import { CalcService } from "./calc.service";

describe("CalcService", () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return sum", () => {
    expect(service.sum(3, 8)).toBe(11);
  });
});
