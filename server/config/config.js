/**
 * Created by jaya on 8/4/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/questionDb',
        rootPath: rootPath,
        port: process.env.PORT || 3003
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb',
        port: process.env.PORT || 80
    }
}