const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
    baseUrl: 'https://automationexercise.com',
    url:'https://automationexercise.com/',
    defaultCommandTimeout: 10000,
    env: {
      email:'ssd234@g.com',
      password:'Dell123456@',
      name:'Alex Smakov'
    }
  }
})