import { getUser } from "./api";
import user from "./test.json";
describe("testing api", () => {
  it("getUser()", () => {
    getUser("getUser(test)").then(res => {
      expect(getUser("test")).toEqual(user);
    });
  });
});
