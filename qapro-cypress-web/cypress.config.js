const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7acoq3',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
