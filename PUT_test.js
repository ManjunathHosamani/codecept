const { I } = inject();
const chai = require("chai");
require("chai").should();
const assert = chai.assert;
const expect = chai.expect;

Feature("PUT tests");
Scenario("TC06 - Verify to update a resource using PUT protocol", async () => {
  I.haveRequestHeaders({ auth: "1111111" });
  let user = await I.sendPutRequest("/transactions/43", { amount: 40 });
  // console.log(user);
  expect(user).to.have.property("status", 200, "statusText", "OK");
});
Scenario("TC07 - Verify whether resouce is actually updated", async () => {
  I.haveRequestHeaders({ auth: "1111111" });
  let user = await I.sendPutRequest("/transactions/43", { amount: 40 });
  // console.log(user);
  expect(user).to.have.property("status", 200, "statusText", "OK");
  expect(user.data).to.have.property("amount", 40);
});
Scenario("TC08 - Verify the response headers in PUT protocol", async () => {
  I.haveRequestHeaders({ auth: "1111111" });
  let user = await I.sendPutRequest("/transactions/43", { amount: 40 });
  // console.log(user);
  expect(user).to.have.property("status", 200, "statusText", "OK");
  expect(user.headers).to.have.property("server", "Cowboy");
});
