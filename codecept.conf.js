const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://6151ff8e4a5f22001701d590.mockapi.io",
      show: true,
      windowSize: "1200x900",
    },
  },
  helpers: {
    Playwright: {
      url: "https://qa-ui.venzee.io",
      show: true,
      browser: "chromium",
    },
  },
  helpers: {
    REST: {
      endpoint: "https://6151ff8e4a5f22001701d590.mockapi.io",
      defaultHeaders: {
        Auth: "11111",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      AssertWrapper: {
        require: "codeceptjs-assert",
      },
    },

    Puppeteer: {
      url: "https://qa-ui.venzee.io",
      restart: false,
      waitForNavigation: "networkidle0",
      waitForAction: 500,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "codecept",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
