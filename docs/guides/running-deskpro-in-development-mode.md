# Running DeskPRO in development mode

In this section you will learn about the various flags and options that you can use in DeskPRO while you develop your app. 

The main reason you would run the helpdesk in development is to speed up your development. In development mode you do not need to compile and install the application each time you make a change.

Instead, DeskPRO will discover your local application server which you have started by running `npm run dev` in your project's root and your changes will be reflected in real-time.
Another reason is that you can change some of the runtime parameters via query parameters that you can add to the helpdesk's url:

    https://your-local-deskpro.com/agent/?appstore.environment=development&appstore.param1&appstore.param2....
     
Here is a list of all the configuration parameters that can be used in development mode:
     
     
 - appstore.environment
        

The only accepted value is : `environment`

- appstore.apiRoot

Overrides the DeskPRO API root which normal is: `https://<your-helpdesk-domain>/api` 
