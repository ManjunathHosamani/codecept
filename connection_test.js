Feature("connection");

Scenario(
  "validate the status “connection.requiresInput” is present on the UI for the layouts.",
  ({ I }) => {
    I.amOnPage("https://qa-ui.venzee.io");
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[1]/input[1]`,
      "15ue9nieu297chqv36im8lfc54"
    );
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]`,
      "l457qvbgbe55nple1gd0slos66h0khtf1bmro24j3r03taaf8g9"
    );
    I.click(`//button[contains(text(),'Sign In')]`);
    I.wait(10);
    I.click("Connections");
    I.seeCurrentUrlEquals("https://qa-ui.venzee.io/connections");
    I.wait(5);
    I.click(`//div[contains(text(),'shopify')]`);
    I.wait(10);
    I.seeElement(
      `//body/div[@id='app']/div[@id='page']/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/span[1]`
    );
  }
);
Scenario("validate whether the channel is shopify", ({ I }) => {
  I.seeElement(`//span[contains(text(),'Shopify')]`);
});
Scenario(
  "validate the TAG is the same that you used in the creation ( if you used a tag ) for the layouts.",
  ({ I }) => {
    I.seeElement(
      `//body/div[@id='app']/div[@id='page']/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]`
    );
  }
);
Scenario("validate the presence of the “*last updated”*", ({ I }) => {
  I.seeElement(".css-0");
});
