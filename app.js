{
    "name": "styleguide",
    "version": "1.0.0",
    "description": "Style Guide",
    "main": "index.js",
    "dependencies": {
      "gulp-less": "^4.0.1",
      "next": "^7.0.2",
      "nprogress": "^0.2.0",
      "react-bootstrap": "^0.30.7"
    },
    "devDependencies": {
      "babel-jest": "^18.0.0",
      "babel-plugin-transform-async-to-generator": "6.16.0",
      "babel-plugin-transform-class-properties": "^6.24.1",
      "babel-plugin-transform-object-rest-spread": "6.20.2",
      "babel-plugin-transform-runtime": "6.15.0",
      "babel-preset-es2015": "^6.18.0",
      "babel-preset-react": "^6.16.0",
      "bower": "^1.8.0",
      "chai": "^3.5.0",
      "enzyme": "^2.7.0",
      "gulp": "^4.0.0",
      "gulp-batch": "^1.0.5",
      "gulp-watch": "^4.3.11",
      "jasmine-reporters": "^2.2.0",
      "jest": "^18.1.0",
      "react": "^15.4.2",
      "react-addons-test-utils": "^15.4.2",
      "react-dom": "^15.4.2"
    },
    "scripts": {
      "dev": "node index.js",
      "test": "./node_modules/.bin/jest",
      "build": "next build",
      "start": "set NODE_ENV=production && node index.js"
    },
    "author": "R. Scott Blamey",
    "repository": "https://github.com/chaparralssx/wowsg",
    "license": "ISC",
    "jest": {
      "collectCoverage": true,
      "coverageReporters": [
        "json",
        "html",
        "text",
        "cobertura"
      ],
      "setupTestFrameworkScriptFile": "./jest/setup-jasmine-env.js",
      "transform": {
        ".*": "./jest/preprocessor.js"
      }
    }
  }
  