Feature("login");

Scenario(
  "TC001 - Validate with blank client secret & blank client id",
  ({ I }) => {
    I.amOnPage("https://qa-ui.venzee.io");
    I.click(`//button[contains(text(),'Sign In')]`);
    I.dontSeeInCurrentUrl("https://qa-ui.venzee.io/distribution-packages");
  }
);
Scenario(
  "TC002 - Validate for the successfull login with valid client id & secret",
  ({ I }) => {
    I.seeElement(`//label[contains(text(),'Client ID')]`);
    I.seeElement(`//label[contains(text(),'Client Secret')]`);
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
    I.seeCurrentUrlEquals("https://qa-ui.venzee.io/distribution-packages");
  }
);
Scenario("TC003 - Validate the successful signout", ({ I }) => {
  I.click(`//a[contains(text(),'Sign Out')]`);
  I.seeCurrentUrlEquals("https://qa-ui.venzee.io/login");
});
Scenario(
  "TC004 - Validate with valid client id & invalid client secret",
  ({ I }) => {
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[1]/input[1]`,
      "15ue9nieu297chqv36im8lfc54"
    );
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]`,
      "00000000000000000000000000000"
    );
    I.click(`//button[contains(text(),'Sign In')]`);
    I.dontSeeInCurrentUrl("https://qa-ui.venzee.io/distribution-packages");
  }
);
Scenario(
  "TC005 - Validate with invalid client id & valid client secret",
  ({ I }) => {
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[1]/input[1]`,
      "000000000000000000000"
    );
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]`,
      "l457qvbgbe55nple1gd0slos66h0khtf1bmro24j3r03taaf8g9"
    );
    I.click(`//button[contains(text(),'Sign In')]`);
    I.dontSeeInCurrentUrl("https://qa-ui.venzee.io/distribution-packages");
  }
);
Scenario(
  "TC006 - Validate with valid client id & blank client secret",
  ({ I }) => {
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[1]/input[1]`,
      "15ue9nieu297chqv36im8lfc54"
    );
    I.wait(3);
    I.dontSee("PASSWORD MUST BE AT LEAST 8 CHARACTERS");
    I.click(`//button[contains(text(),'Sign In')]`);
    I.dontSeeInCurrentUrl("https://qa-ui.venzee.io/distribution-packages");
  }
);
Scenario(
  "TC007 - Validate with valid client secret & blank client id",
  ({ I }) => {
    I.amOnPage("https://qa-ui.venzee.io");
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]`,
      "l457qvbgbe55nple1gd0slos66h0khtf1bmro24j3r03taaf8g9"
    );
    I.dontSee("USERNAME MUST BE AT LEAST 8 CHARACTERS");
    I.click(`//button[contains(text(),'Sign In')]`);

    I.dontSeeInCurrentUrl("https://qa-ui.venzee.io/distribution-packages");
  }
);
Scenario(
  "TC008 - Validate with special char in client id & client secret",
  ({ I }) => {
    I.amOnPage("https://qa-ui.venzee.io");
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[1]/input[1]`,
      "!@#$%^&&**"
    );
    I.fillField(
      `//body/div[@id='app']/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]`,
      ")(*&^^%$$#@%^&*("
    );
    I.click(`//button[contains(text(),'Sign In')]`);
    I.dontSeeInCurrentUrl("https://qa-ui.venzee.io/distribution-packages");
  }
);
