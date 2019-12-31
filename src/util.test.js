import { toShortNumber, getDay, formatNumber } from "./util";
describe("formatNumber()", function() {
  it("formatNumber(10000) should return '10,000'", function() {
    expect(formatNumber(10000)).toEqual("10,000");
  });
});
describe("toShortNumber()", function() {
  it("toShortNumber(1000) should return '1k'", function() {
    expect(toShortNumber(1000)).toEqual("1K");
  });
});
describe("getDay()", function() {
  it("getDay(2019-12-31) should return 'TUE'", function() {
    expect(getDay("2019-12-31")).toEqual("TUE");
  });
});
