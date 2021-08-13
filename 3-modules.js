// CommonJS - Every file is a module (by default)
// Modules  - Encapsulated Code - ES6 - (only share minimum)

const names = require("./4-names")
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")

sayHi("Paula")
sayHi(names.john)
sayHi(names.peter)