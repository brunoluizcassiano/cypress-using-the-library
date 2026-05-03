const path = require('path');
module.exports = {
 resolve: {
 alias: {
     'test-acceptance-cypress': path.resolve(__dirname, 'node_modules/test-acceptance-cypress'),
     'test-acceptance-cypress/schemaWrapper': path.resolve(__dirname, 'node_modules/test-acceptance-cypress/cypress/common/schema/SchemaWrapper.js'),
     'test-acceptance-cypress/schemaValidator': path.resolve(__dirname, 'node_modules/test-acceptance-cypress/cypress/common/schema/SchemaValidator.js')
   }
 }
};