# React TypeScript SCSS Spring Boot Hybrid Project

In the past, it's been difficult to create hybrid Node/Spring projects due to restrictions with directory structure and build tools. For example, many have been forced to put the Node-based application deep into the project at src/main/resources and do other crazy things to make it work.

This project takes a different tact now that React applications have a directory structure that is more compatible with a Maven directory structure, particularly the src/ directory. In fact, this project began life as a React project rather than a Maven project.

Here are the steps which were taken to create this project. You can either reproduce or simply clone the project as-is.

## Who Should Take Note

There are 2 use cases here that I can think of.

1. You simply want to serve static assets (from a React app) through Spring Boot rather than Node directly. There are many reasons why people might prefer to do this.

2. You want an all-in-one deployment of your application rather than separate front-end and back-end deployments.

## Initializing React

Here are the steps that were taken to initialize this project for React:

* `npx create-react-app react-typescript-scss-spring-boot --scripts-version=react-scripts-ts`
* `yarn add node-sass-chokidar`
* `vi package.json` (see below to add build-css, watch-css)
* `vi tsconfig.json` (Add "baseUrl": "." to prevent error)

### Adding SCSS Support

(From the React docs)

In package.json, add the following lines to scripts:
`   "scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",`

## Initializing Spring Boot with `mvn archetype`

Next, you can use `mvn archetype` to overlay a basic Spring Boot project on top of the existing React project directory structure. There will be no conflict with src/ or any other directories or files.

Run:
`cd ..` Get to 1 level above the project
`mvn archetype:generate -DarchetypeGroupId=am.ik.archetype -DarchetypeArtifactId=spring-boot-blank-archetype -DarchetypeVersion=1.0.6`
and follow the prompts.

* Make sure that your `artifactId` matches the directory name for your project (i.e. react-typescript-scss-spring-boot)

## Add Maven resources plugin to copy React build artifacts

TODO

## Add Maven plugin to install Node, NPM, and Yarn

TODO

## Add Yarn build to Maven

TODO

You could do `npm run build` but Yarn has proven so far to be much faster and more reliable than NPM.
