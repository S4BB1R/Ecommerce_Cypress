const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
    baseUrl: 'http://automationexercise.com',
    url:'https://automationexercise.com/',
    defaultCommandTimeout: 10000
  }
})