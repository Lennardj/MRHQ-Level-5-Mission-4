const request = require("supertest")("https://localhost:3000/riskratings");
const assert = require("chai").assert;

describe("Users API", () => {
  it("POST /riskratings", () => {
    const data = {
      risk: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes ",
      riskrating: 3,
    };
    return request
      .post("/riskratings")
      .send(data) // send payload data
      .then((res) => {
        assert.equal(res.body.risk, data.riskrating);
      });
  });
});
