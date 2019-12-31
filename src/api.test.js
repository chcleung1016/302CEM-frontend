import source from "../db.json";
import { getUser } from "./api";
var nock = require("nock");
describe("getUser()", function() {
  it("getUser('AgileTest')", async function() {
    nock("http://localhost:5000")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/AgileTest")
      .reply(200, source);
    const res = await getUser("AgileTest");
    expect(res).toEqual(source);
  });
});
