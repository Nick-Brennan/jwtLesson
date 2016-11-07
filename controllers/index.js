//All controllers interacting with the DB must include this line
db = require('../models');

//export all files from the module using the syntax below
module.exports.testF = require('./test.js');
module.exports.subscribe = require('./subscribe.js');
module.exports.home = require('./home.js');
