
// import * from ....  does not work
// dynamicly
// so use require()

// no default export 
// eslint defaulting in src/index.js

if (process.env.NODE_ENV == 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}