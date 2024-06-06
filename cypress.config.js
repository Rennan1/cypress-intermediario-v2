const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, //para esconder token
      requestMode: true, //para dar feedback visual API
    },
    
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})

