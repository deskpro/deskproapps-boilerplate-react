# Learn the basic concepts

A Deskpro Apps application is at it's core an iframe which is loaded at various locations inside the main DeskPRO user interface and interacts with the other user interface components 
   by using the [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API  

On disk, an application is a folder with a simple structure which will be presented next. This folder is packaged into a zip file, called an application bundle which is used to install the application.  

## The application structure

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

## The application manifest

## The project structure