module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "plugins": ["jasmine"],
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};