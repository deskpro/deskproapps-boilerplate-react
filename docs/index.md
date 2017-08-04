# Getting started

This page will help you install and build your first DeskproApps app.

Four items are required in order to get started developing applications:

1. Access to the latest version of [DeskPRO](https://www.deskpro.com/). The minimum version is XXX-YYY. You can use an existing installation if it was updated
or you can go to the [downloads]((https://support.deskpro.com/en/downloads)) page and pick your distribution.
2. A recent version of nodejs and npm running on your machine. We recommend nodejs 6 and npm 3.10
3. A clone of [Deskpro Apps Boilerplate repository](https://github.com/deskpro/deskproapps-boilerplate-react)
4. The [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat) present on your machine. This is the official build tool for DeskPRO Apps and you will need it at least for packaging your application in the format required for installation.

Assuming you have already solved the first two requirements, the next step is to clone the boilerplate repository in your project repository:
   
    cd <PROJECT_DIR>
    git clone https://github.com/deskpro/deskproapps-boilerplate-react.git   

After git has finished cloning, install the project's dependencies. Run the following command:  

    npm install && npm install --save @deskproapps/deskproapps-sdk-react

The final step is to install [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat), which is the main tool to build and package apps:

    npm install -g @deskproapps/dpat
    
We recommend to have [Deskpro Apps Tool](https://github.com/deskpro/deskproapps-dpat) (also known as **dpat** on the command line) globally available, but if for some reason you can not, then install all the dependencies locally with this command:

    npm install @deskproapps/dpat

You are now ready to run your first app !

## Running your first app

From your project's folder, run the following command to start the development server:    
    
    npm run dev    
    
The server can be found at this address `http://localhost:31080` and it will now serve your application when requested by the helpedesk.    
    
The next step is to login to the agent interface, and navigate to the link below: 
    
    https://your-local-deskpro.com/agent/?appstore.environment=development    
    
Notice the **appstore.environment=development** query parameter that tells DeskPRO to load your application from the development server.
    
To view your application, open the Tickets section from the left hand side menu and click on a ticket
    

## Modifying the app

To start making changes, open the following file in  your favourite editor.
 
    src/main/javascript/App.jsx
    
While the development server is running, any change will cause the application to be reloaded in the ticket's taskbar, giving 
you a nice live preview. Some changes will not appear immediately and in this case just re-open the ticket

