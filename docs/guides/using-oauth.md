# Using Oauth

In this section you will learn more about using Oauth in your application to authenticate the users against third party APIs and create more integrations with DeskPRO:

- [Using Browser Only Oauth Flows](#using-browser-only-oauth-flows)
- [Connecting your application to an Oauth Provider](#connecting-your-application-to-an-oauth-provider)
- [Retrieving access tokens](#retrieving-access-tokens)

## Using Browser only Oauth Flows

Browser only Flows were created for browser-based apps which run entirely in the browser after loading the Javascript and HTML source code from a web page. [The Oauth2 Specification](https://tools.ietf.org/html/rfc6749) offers the `Implicit Authorization Flow` for this type of applications and some providers may offer some variations (like offering a window.PostMessage implementation)

If your API already implements the Implicit Authorization Flow, then you can skip the rest of this section. The only things to remember is to store your Client Identifier the first time the application is run.

## Connecting your application to an Oauth Provider

If the browser only flow does not apply to your application, you will need a way for DeskPRO administrators to connect your application to the Oauth Provider of your API. Most of the time, this will require them registering a new client or application with the Oauth Provider and passing the registration details back to your application, where they will be securely stored and used to retrieve access tokens.

The procedure can be summarized in three steps:

1. Provide clear instructions for admins

    The first step in connecting your application is to provide instructions for DeskPRO administrators on how to register with the Oauth Provider.
    
2. Collect registration details

    The second step is to provide a way for the administrators to pass this information back. (an application form for instance)
    
3. Save the connection
    


## Retrieving access tokens
