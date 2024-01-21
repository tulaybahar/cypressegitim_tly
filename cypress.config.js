const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:"sdf7e1",
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl:"https://demo.vercel.store/",
    watchForFileChanges:false,
    pageLoadTimeout:5000,
    defaultCommandTimeout:10000,
    viewportWidth:1920,
    viewportHeight:1080,
    video:true,
    failOnStatusCode: false
   
  },
});
