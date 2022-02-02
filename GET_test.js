const { I } = inject();
const chai = require("chai");
require("chai").should();
const assert = chai.assert;
const expect = chai.expect;

Feature("GET tests");

Scenario("TC01 - Verify to get transactions using GET protocol", async () => {
  I.haveRequestHeaders({ auth: "1111111" });
  let user = await I.sendGetRequest("/transactions");
  expect(user.body).to.not.be.null;
  expect(user).to.have.property("status", 200);
  // console.log(user.data);
  // I.wait(5);
});
Scenario("TC02 - Verify total number of transactions", async () => {
  I.haveRequestHeaders({ auth: "1111111" });
  let user = await I.sendGetRequest("/transactions");
  expect(user.data).to.not.have.length.above(100);
});

Scenario(
  "TC03 - Verify response payload properties of a transaction",
  async () => {
    I.haveRequestHeaders({ auth: "1111111" });
    let user = await I.sendGetRequest("/transactions/44");
    expect(user.body).to.not.be.null;
    expect(user).to.have.property("status", 200);
    expect(user.data).to.have.property("amount", "190.50");
    expect(user.data).to.have.property(
      "description",
      "deposit transaction at Olson - DuBuque using card ending with ***6307 for NGN 689.32 in account ***40206513"
    );
    expect(user.data).to.have.property("createdAt", "2021-09-26T23:54:46.667Z");
    expect(user.data).to.have.property("id", "44");
    expect(user.data).to.have.property("type", "type 44");
    // console.log(user.data);
  }
);
