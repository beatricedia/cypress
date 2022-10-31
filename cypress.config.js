const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: "mvbhty",

  e2e: {
    baseUrl: 'https://www.emag.ro/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
    // supportFile: false
  },
});
