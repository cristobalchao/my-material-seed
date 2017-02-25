# Modern app seed for Angular apps (1.x)

Includes following:

 - [webpack 2](https://webpack.js.org/) (modules, assets bundling)
 - [babel](http://babeljs.io/) (ES2015 support)
 - [ng-annotate](https://github.com/olov/ng-annotate)
 - [sass](http://sass-lang.com/)
 - [App Engine](https://cloud.google.com/appengine/)

### Usage

Note: NodeJS 6+ is required.

1. Install dependencies `npm i`
2. Start dev server `npm run start` open [http://localhost:3000](http://localhost:3000)
3. Lint your code `npm run lint`
4. Create build for deployment `npm run build:min` for production build, or `npm run build` for development build
5. Set the name of your app under `config:gcloud` in 'package.json' and deploy the app to App Engine `npm run gcloud:deploy`

---

## Getting started

[Angular Guide](https://docs.angularjs.org/guide)

At first be sure that you are familiar with ES2015, some useful materials:

 - [tutorial from BabelJS](http://babeljs.io/docs/learn-es2015/)
 - [Exploring ES6: Upgrade to the next version of JavaScript by Dr. Axel Rauschmayer](http://exploringjs.com/)

Read [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) - it is important to know, what is good and what is not, and why.

At least briefly read [webpack documentation](https://webpack.js.org/configuration/) it is crucial to understand how it works in general.

---

## Usage advice

### Directory layout

    ├── build                 # build stats
    └── src                   # app sources
        ├── components        # components directory
        ├── configuration     # configuration directory
        ├── main              # one of app modules
        ├── index.html        # one of app entry points
        ├── main              # one of app modules
        ├── app.module.js     # app entry module
        ├── vendor.module.js  # vendor entry module
        └── app.scss          #
