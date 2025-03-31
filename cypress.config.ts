import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  injectDocumentDomain: true,
  e2e: {
    baseUrl: 'https://mail.aol.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
