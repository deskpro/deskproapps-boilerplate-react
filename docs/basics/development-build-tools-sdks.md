# Development, build tools and SDKs

In this section, you will learn more about:

- [Technology stack](#technology-stack)
- [The project structure](#the-project-structure)
- [Setting up the application manifest](#setting-up-the-application-manifest)
- [Application entrypoint](#application entrypoint)
- [The React SDK](#the-react-sdk)
- [DeskPRO Apps Tool](#deskpro-apps-tool)

# Technology stack

We recommend using [React](https://facebook.github.io/react/) for your apps and for this reason this guide will start by presenting a project structure suitable for using React.

Other technologies we use are [Webpack](https://webpack.js.org/) for bundling, [Babel](https://babeljs.io/) for compiling and [Jest](https://facebook.github.io/jest/) for testing.

We have conveniently incorporated Webpack, Babel and Jest into our build tool, [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat) so there's no setup required and you can focus on building the application
using the best of the latest technology.

We have also bundled a development server with [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat). If you have cloned the [Deskpro Apps Boilerplate](https://github.com/deskpro/deskproapps-boilerplate-react),
you can start it with the following command:

    npm run dev

The development server takes care of all the compilation details and you can can use the latest ES6 syntax out-of-the-box. It will also watch your files for any changes and handle the compilation for you, dramatically reducing the development timed

   

## The project structure

The following diagram shows the recommended project structure and below you will find a description of each essential component:

```
<PROJECT-root>
├── CHANGELOG.md
├── dist
│   └── .. 
├── docs
│   └── ..    
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── main
│   │   ├── docs
│   │   │   └── README.md
│   │   ├── html
│   │   │   └── index.html
│   │   ├── javascript
│   │   │   ├── App.jsx
│   │   │   └── index.js
│   │   ├── resources
│   │   │   └── icon.png
│   │   └── sass
│   │       └── index.scss
│   ├── test
│   │   └── unit
│   │       └── App.test.jsx
│   └── webpack
│       ├── entrypoint.js
│       ├── webpack.config-development.js
│       └── webpack.config-distribution.js
└── target
    └── ..

```

- CHANGELOG.md
    
    We recommend keeping a changelog of your changes. It is not mandatory, but it will make it easier for your users to see the notable changes in your app. We also prefer the format at [http://keepachangelog.com/en/1.0.0/](http://keepachangelog.com/en/1.0.0/)
    
- dist
    
    This is the folder that will hold your packaged application and compiled assets. Everything in this folder is ignored and we would not recommend storing anything in here, as this folder gets emptied every time the app is built.
     
- docs
     
     This is another optional folder where you could store any relevant documentation for your app. We are not using it at the moment, but in the future if you use it to publish documentation (for instance on github pages) we could link to your documentation from DeskPRO.

- LICENSE

    This is a standard license document which we recommend you add. 
    
- package.json    

    This is the standard npm package manifest. Along the usual entries in this file, we require a `deskpro` entry to be present here, with information about your application. More details about this in the next section, [Setting up package.json](#setting-up-package-json)
     
- README.md
     
     This is the standard readme file. We recommend adding some badges to build status, tests status etc.
     
- src/main
    
    This is the folder that will host your application files. It is organized by file type
    
- src/main/docs 
     
     This folder should host the application's `README.md` file and any other documentation files you need to bundle with your application. Any install instructions or any information required during install should go in here. 
     
     The `README.md` file from this folder will be shown by the installation wizard in DeskPRO.
     
- src/main/html

    This folder should host all the html files that will run your application when they will be loaded as iframes by DeskPRO
     
- src/main/javascript
     
     Place here all your javascript files. There is only one important file here, `index.js` . This file should export your application's entrypoint function, `runApp`
     
     You can place your application's main file in `App.jsx`, but that is entirely optional. 
     
- src/main/javascript/index.js
     
     Your application entrypoint, exports a function named `runApp` which must return a React Component
     
- src/main/resources
     
     Place here all the files which need no compilation. This is a good place for css or image files. Everything in this folder will eventually end up in the `/assets` folder of your application bundle.
     
     Here you should also place your application's icon, in a file called icon.png. It is recommended to have a 128x128 pixels icon so it will display nicely inside DeskPRO.

- src/main/sass     

    This folder holds your sass files. These files will be automatically compiled at build time and will end in the `/assets` folder of your application bundle as one file called `main.css`
    
    The index.scss file is the entrypoint to the rest of your sass files. This file should contain `@import` statements for the scss files you want to include. Any file not referenced by a sass import statement in index.scss will be ignored by the build tool

- src/test/unit
     
     Here you should place all your unit test files. We strongly encourage the use of [Jest](https://facebook.github.io/jest/) for all testing purposes so we made it ready to use
     
- src/webpack
     
     This folder contains the build and package configuration for webpack. Normally there should be no reason to modify any of these files, but we want to be flexible so we provide them with our boilerplate in case you ever need to tweak them.
     
- target
     
     This folder is used by the development server to stage your files during development. All its contents are ignored.
     
     
Now that you have an overview of the project structure, it's time to review the requirements for `package.json`      
     
## Setting up the application manifest

The application manifest describes your application and the way it should be managed by DeskPRO. The manifest is defined
by adding a `deskpro` key to your package.json file: 

```json

{
  "name": "my-app-name",
  "version": "1.0.0",
  "deskpro": {
    // my deskpro apps config here
  }
}

```

The manifest contains application properties like the title, installation information and describes how to handle your application state and interaction with external APIs. Take a look at the example manifest below and then read the description of each option:

```json
{
  "version": "2.1.0",
  "title": "short application title",
  "isSingle": true,
  "scope": "agent",
  "targets": [
    {
      "target": "ticket-sidebar",
      "url": "html/index.html"
    }
  ],
  "settings": [],
  "state": [
    {
      "name": "app-settings",
      "isBackendOnly": false,
      "permRead": "EVERYBODY",
      "permWrite": "OWNER"
    }
  ],
  "deskproApiTags": [
    "tickets.*"
  ],
  "externalApis": []
}
```

- version
    
    This is the version of the manifest you are using. For now, ```2.1.0``` is the latest version 

- title

    This is the title of your application which your users will see

- isSingle

    This is a boolean flag which determines if the application can be installed multiply times. For now keep this flag to `true`

- scope

    This option determines which DeskPRO module is the target of the application. For now only `agent` is supported and this means
     your apps will appear only in the ``Agent Interface``. Other values will make it possible for your apps to work for instance in the `Portal Interface`

- targets

    This is a list of `Application Target Definition` objects, which define which of your html files will be displayed in which specially designed user interface location. 
    It may help to think of the main helpdesk UI as a template with a predefined set of placeholders which can be filled by your application's UI 
    
    An `Application Target Definition` is an object with two properties: `target` and `url`. The `target` is one of our predefined targets, and `url` is a relative (from your application root) url to one of your html files.
      
    If you follow the project structure and your html file is `src/main/html<path-to-file>/file.html`, then your url will be `html<path-to-file>>/file.html`  

- settings

- state

- deskproApiTags

- externalApis


## Application entrypoint

The application entrypoint is a special function named `runApp` that every application must export, which is called when the DeskPRO SDK runtime finishes the initiation phase. The default location for the entrypoint
 is in `src/main/javascript/index.js` file.

When the entrypoint is called the iframe which hosts your application is fully loaded, and `runApp` will receive a single parameter called `app` which is an object that represents the main way of accessing the DeskPRO Apps functionality. 
Technically the `app` parameter is an instance of [Core/App](https://github.com/deskpro/deskproapps-sdk-core/blob/master/src/main/javascript/Core/App.js), and is a facade or light-wrapper around the functionality offered by the various components of the DeskPRO Apps SDK.

The SDK does not require a return value from the entrypoint, and for a React application, the entry-point should just render the application. Here is an example:

```javascript
import ReactDOM from 'react-dom';
import App from './App';

export function runApp(app) {
  ReactDOM.render(<App dpapp={app} />, document.getElementById('deskpro-app'));
}

```

## The React Sdk

Most of the apps will require a user interface, whether it is forms, authentication buttons or just displaying data. We wanted to have a uniform look and feel for the apps to better integrate them in our helpdesk's UI so
we created many React components to cover most of the UI needs and help you develop faster 

One of the most useful components is the `DeskproAppContainer`, which has the purpose of increasing the usability of your and providing a consistent-look-and feel. It adds menus, a title bar, and takes care of rendering your application. Here is an example of how to use it in your entrypoint:
  
```javascript
import ReactDOM from 'react-dom';
import { DeskproAppContainer } from '@deskproapps/deskproapps-sdk-react';
import App from './App';

export function runApp(app) {
  ReactDOM.render(
    <DeskproAppContainer app={app} name={'YOUR APP NAME'} mainComponent={App} />,
    document.getElementById('deskpro-app')
  );
}
  
```

We recommend you always use the `DeskproAppContainer` if your application needs a user interface. It will simplify your app development and it will make it easier for your helpdesk user's to use your app.

## DeskPRO Apps Tool

The [DeskPRO Apps Tool]((https://github.com/deskpro/deskproapps-dpat)), commonly referred to as  `dpat` is the build tool we have created to simplify most of the tasks of developing an app.

It is used for validating an application manifest, compiling, packaging and testing an application, for deploying and running the local development server. In the [Deskpro Apps Boilerplate](https://github.com/deskpro/deskproapps-boilerplate-react) project
you will mostly interact with it via the two npm commands `npm run dev` and `npm run package` when you start the development server and when you are ready to package your application.


