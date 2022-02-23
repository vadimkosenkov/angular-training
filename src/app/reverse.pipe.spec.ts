import { ReversePipe } from "./reverse.pipe";

describe("ReversePipe", () => {
  it("create an instance", () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
  it("shoud transform", () => {
    const pipe = new ReversePipe();
    expect(pipe.transform("123")).toBe("321");
  });
});
