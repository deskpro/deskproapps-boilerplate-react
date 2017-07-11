# app-boilerplate-react

A foundation to get you started developing React DeskPro Apps with the best developer experience

## Getting started
     
### Start the development server    
    
In your project folder run    
    
    npm run dev
 
Go to your deskpro installation, login to the agent interface, and navigate to the link below: 
    
    https://your-local-deskpro.com/agent/?appstore.environment=development

Notice the **appstore.environment=development** query parameter that tells Deskpro to load your application from the development server

### Changing the default application
 
To start making changes, open the following file in  your favourite editor.
 
    src/main/javascript/App.jsx
    
While the development server is on,  any change will cause the application to be reloaded in the Deskpro window, giving 
you a nice live preview.

### Packaging the application for distribution

In your project folder run:    
    
    npm run package

This will create a `dist` folder inside your project folder which contains all the unpacked and compiled assets
and a zip file named `app.zip`. This `app.zip` file is the one required to install your application via the DeskPro admin interface. 

## Documentation

 View online docs at: https://deskpro.github.io/deskproapps-boilerplate-react
