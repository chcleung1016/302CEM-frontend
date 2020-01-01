import source from "../db.json";
import { getUser } from "./api";
var nock = require("nock");
describe("getUser()", function() {
  nock("http://localhost:5000")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/AgileTest")
    .reply(200, source);
  it("getUser('AgileTest') should return db.json", async function() {
    const res = await getUser("AgileTest");
    expect(res).toEqual(source);
    expect(res.name).toEqual(source.name);
  });
});
