# Development, build tools and SDKs

In this section, you will learn more about:

- [Technology stack](#technology-stack)
- [The project structure](#the-project-structure)
- [Setting up package.json](#setting-up-package-json)
- [Application entrypoint](#application entrypoint)
- [DeskPRO Apps Tool](#deskpro-apps-tool)
- [The React SDK](#the-react-sdk)

When developing a new application, it is best to use the development server that comes with [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat). If you have cloned the [Deskpro Apps Boilerplate]](https://github.com/deskpro/deskproapps-boilerplate-react),
you can start it with the following command:

    npm run dev

The development server takes care of all the compilation details and you can can use the latest ES6 syntax out-of-the-box. It will also watch your files for any changes and handle the compilation for you.

We recommend using [React](https://facebook.github.io/react/) for your apps and for this reason this guide will start by presenting a project structure suitable for using React   

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
     
     This folder should host the application's README.md file and any other documentation files you need to bundle with your application. Any install instructions or any information required during install should go in here. 
     
     The **README.md** file from this folder will be shown by the installation wizard in DeskPRO.
     
- src/main/html

    This folder should host all the html files that will run your application when they will be loaded as iframes by DeskPRO
     
- src/main/javascript
     
     Place here all your javascript files. There is only one important file here, `index.js` . This file should export your application's entrypoint function, `runApp`
     
     You can place your application's main file in `App.jsx`, but that is entirely optional. 
     
- src/main/javascript/index.js
     
     Your application entrypoint, exports a function named **runApp** which must return a React Component
     
- src/main/resources
     
     Place here all the files which need no compilation. This is a good place for css or image files. Everything in this folder will eventually end up in the `/assets` folder of your application bundle.
     
     Here you should also place your application's icon, in a file called icon.png. It is recommended to have a 128x128 pixels icon so it will display nicely inside DeskPRO.

- src/main/sass     

    This folder holds your sass files. These files will be automatically compiled at build time and will end in the **/assets** folder of your application bundle as one file called `main.css`
    
    The index.scss file is the entrypoint to the rest of your sass files. This file should contain `@import` statements for the scss files you want to include. Any file not referenced by a sass import statement in index.scss will be ignored by the build tool

- src/test/unit
     
     Here you should place all your unit test files. We strongly encourage the use of [Jest](https://facebook.github.io/jest/) for all testing purposes so we made it ready to use
     
- src/webpack
     
     This folder contains the build and package configuration for webpack. Normally there should be no reason to modify any of these files, but we want to be flexible so we provide them with our boilerplate in case you ever need to tweak them.
     
     
Now that you have an overview of the project structure, it's time to review the requirements for `package.json`      
     
## Setting up package.json

## Application entrypoint

## DeskPRO Apps Tool

## The React Sdk