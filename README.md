# WOW Logistics Style Guide Project

This is a Node.js/React.js/[react-booststrap](https://react-bootstrap.github.io/components.html) site using [Next.js](https://github.com/zeit/next.js).

## Getting Started

The following software must be installed for development. Assumes you already have Git installed.

- Install Node.js and the npm package manager. After installation, run the following command to install the packages for this project.

```bash
$ npm install
```

- Install the [Bower Package Manager](http://bower.io/) by using npm. Bower is used to manage frontend packages and javascript.

```bash
$ npm install -g bower
```

- Install the [Gulp](http://gulpjs.com/) build system by using npm. Gulp is used for automating the development process.

```bash
$ npm install -g gulp
```

- (optional) Install the Typescript definition manager for intellisense in your code editor, then run `typings install` to download the definitions for this project.

```bash
$ npm install -g typings
$ typings install
```
##  Running the Application

Once you've installed the prerequisites and cloned the repository using `git`, you're ready to get started.

To install the node modules and bower packages, run the following commands from the directory of your local copy of the repository.

```bash
$ npm install
```

```bash
$ bower install
```

After the install process is complete, you will be able to run the application using npm.

```bash
$ npm run dev
``
##  Preprocessing LESS (CSS)

A watch script for LESS files is set up. To automatically trigger preprocessing, open a separate bash window and run:

```bash
$ gulp watch
```

When you run gulp watch, LESS files will be preprocessed when they are changed, and a new theme.css file will be created.

## Running tests
To run tests:
```bash
$ npm test
```
