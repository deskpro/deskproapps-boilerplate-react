# app-boilerplate-react

A foundation with the best developer experience in mind to get you started developing React DeskPro Apps

## Prerequisites

Make sure you have an up to date version of node, preferably version 6.x.x

Make sure you have the latest Deskpro Apps Tool, installed globally

    npm install -g  @deskproapps/dpat


## Getting started


### Create a new project

In a directory of your choice, use the dpat tool to create a new project: 

    dpat new <project-name>
    
You can also give **dpat** a path to an existing folder. Dpat will clone this repository and make the necessary changes for you to get started.
However some things are not fully automated so you also need to do some of the tasks manually:

* set the name of your project in <project-name>/package.json
* set the correct information required by deskpro in <project-name>/manifest.json
     
    
### Start the development server    
    
    dpat server <project-name>

You can also give **dpat** the full path to your project folder 

Go to your deskpro installation, login to the agent interface, and navigate to the link below: 
    
    https://your-local-deskpro.com/agent/?appstore.environment=development

Notice the **appstore.environment=development** query parameter that tells Deskpro to load your application from the development server

Click on a ticket and you should see the right hand side panel opening, showing your development application

### Changing the default application
 
To start making changes, open the following file in  your favourite editor.
 
    src/main/javascript/App.jsx
    
While the development server is on,  any change will cause the application to be reloaded in the Deskpro window, giving 
you a nice live preview.

## Documentation

 View online docs at: https://deskproapps.github.io/app-boilerplate-react
