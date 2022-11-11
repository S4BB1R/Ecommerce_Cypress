const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
    baseUrl: 'https://automationexercise.com',
    url:'https://automationexercise.com/',
    email:'gg@g.com',
    defaultCommandTimeout: 10000
  }
})