# Learn the basic concepts

In this section, you will learn about:

- [The application structure](#the-application-structure)
- [The application Manifest](#the-application-manifest)
- [The application Entrypoint](#the-application-entrypoint)
- [The Application Object](#the-application-object)

A Deskpro Apps application is at it's core an iframe which is loaded at various locations inside the main DeskPRO user interface and interacts with the other user interface components 
   by using the [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API  

We call the locations that can load and display apps, application **targets** and your application can choose from a number of such targets. Example of such targets are *ticket-sidebar* for apps that appear
 in a sidebar when a ticket is opened in the agent interface, or *background* for applications that do not need to interact with the user directly.
  
Each such application target will have different properties and hooks you can call and it will its own UI requirements 
   

## The application structure

On disk, an application is a folder with a simple structure which will be presented next. This folder is packaged into a zip file, called an application bundle which is used to install the application.

We are somehow opinionated when it comes to how you want to structure your app. We require each app to have an icon, a readme file, at least one html file and an application manifest: 

```
    <App Root>
    ├── assets
    │   ├── icon.png
    ├── html
    │   └── index.html
    ├── manifest.json
    └── README.md

```

Here is a description of each element from the previous diagram:


- assets folder
    
    The assets folder is where all your css, js, and everything which is not html should be located
    
- assets/icon.png
    
    This is the default icon of your application which will be used everywhere inside DeskPRO to represent your app. It is best to have a square image, with size of 128x128 pixels. 

- html folder
    
    This folder contains all the html pages of your application that will be served as iframes when the application is loaded. You can reference external assets in your html, for instance the CDN version of jquery or packages from npm's CDN
    
- README.md
    
    This is a markdown document that should contain your instructions to users who will install your application. It will be shown by the installation wizard 
 
- manifest.json
 
    This file contains the application manifest in a json format and is a very important one because it describes your application and its requirements so DeskPRO knows how to handle it. The application manifest will contain information like your application's title, description and version but also more advanced settings.
      
    We usually handle the manifest generation for you with our build tools, but we believe it is important to know the various options so the next chapter is about its structure 

## The application manifest

The application manifest is a json object with the purpose of describing you app and its requirements. It has the following structure:
    
```json
{
  "appVersion": "",
  "author": {
    "email": "",
    "name": "",
    "url": ""
  },
  "description": "",
  "deskproApiTags": [],
  "externalApis": [],
  "isSingle": true|false,
  "name": "",
  "scope": "agent",
  "settings": [],
  "state": [],
  "targets": [],
  "title": "",
  "version": ""
}

```

## The application Entrypoint

The application entrypoint is a function named `runApp` should be exported by your application's main module, index.js.
The application entrypoint represents the bridge between DeskPRO Apps SDK and your application and when it is called it represents the signal that your application can start

## The Application Object

The application object gives you access to the DeskPRO Apps Application API and it is made available at runtime as the only
parameter of your Application Entrypoint.

To find out more about the Application Object, you can visit its definition in the [Deskpro Apps Core SDK](https://github.com/deskpro/deskproapps-sdk-core/blob/master/src/main/javascript/Core/App.js) repository
