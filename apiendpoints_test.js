const { I } = inject();
const chai = require("chai");
require("chai").should();
const assert = chai.assert;
const expect = chai.expect;

Feature("apiendpoints");

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
