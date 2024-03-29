import request from "supertest";
import app from "@index";
import { expect } from "chai";

describe("index", async () => {
  it("Index page returns 200", async () => {
    await request(app)
      .get("/")
      .then((res) => {
        expect(res.status).to.eql(200);
      });
  });
});
