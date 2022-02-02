const { I } = inject();
const chai = require("chai");
require("chai").should();
const assert = chai.assert;
const expect = chai.expect;

Feature("POST tests");

Scenario(
  "TC04 - Verify to create or update a transaction using POST protocol",
  async () => {
    I.haveRequestHeaders({ auth: "1111111" });
    let user = await I.sendPostRequest("/transactions", {
      createdAt: "2021-09-27T02:27:25.872Z",
      description: "Manjunath made a transaction",
      amount: 20,
      type: "type 01",
      id: "01",
    });
    // console.log(user);
    expect(user).to.have.property(
      "status",
      400,
      "statusText",
      "Bad Request",
      "connection",
      "Close"
    );
  }
);
Scenario("TC05 - Verify response headers in POST protocol", async () => {
  I.haveRequestHeaders({ auth: "1111111" });
  let user = await I.sendPostRequest("/transactions", {
    createdAt: "2021-09-27T02:27:25.872Z",
    description: "Manjunath made a transaction",
    amount: 20,
    type: "type 01",
    id: "01",
  });
  // console.log(user);
  expect(user.headers).to.have.property("server", "Cowboy");
});
