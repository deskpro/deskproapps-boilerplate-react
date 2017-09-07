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
    
    At the Oauth Provider page they will be asked for a redirect or callback URL, which the Oauth Provider will use as part of the authorization flow. 
    
    Each application has it's own redirect URL and it can be retrieved  by calling the `settings` method of the Oauth Application API with the name of your provider:
       
   ```javascript
    const { dpapp } = this.props;    
    dpapp.oauth.settings(provider).then(({ urlRedirect }) => console.log( urlRedirect));       
   
   ```
    
2. Collect registration details

    The second step is to provide a way for the administrators to pass this information back. (an application form for instance).
    
    See the next step for which information is required.
    
3. Save the connection
    
Before you can save the connection, you should declare the following `storage access pattern` in your application's manifest:
        
```json
  {
    "name": "oauth:<provider name>",
    "isBackendOnly": true,
    "permRead": "EVERYBODY",
    "permWrite": "OWNER"
  }
```        
    
Here, `<provider name>` should be replaced with the name of your provider. This access pattern makes sure only the administrator
  can modify the connection details and the actual values are hidden from users. 
    
After your application receives the registration details back from the administrators, you can connect your application by calling `register` method of the Oauth Application API method:
    
```javascript
    const { dpapp } = this.props;    
    dpapp.oauth.register(provider, connection).then(value => console.log(value));    
```
    
The connection object has the following structure and it must contain the information received from the administrators:
    
```json
{
  "urlAuthorize": "",  
  "urlAccessToken": "",  
  "urlResourceOwnerDetails": "",  
  "urlRedirect": "",  
  "clientId": "",  
  "clientSecret": ""  
}
```    
Each property is mandatory and the following list describes each property of the connection object:

- urlAuthorize

    This is the oauth authorization url as indicated by the Oauth Provider
     
- urlAccessToken
     
     This is the url used to retrieve an access token by as indicated by the Oauth Provider

- urlResourceOwnerDetails

    This is an url that can be used on to discover the identity of the access token owner and also verify the access token
    
- urlRedirect
    
    This is the redirect url that we have discussed in step 1.
    
- clientId
    
    This is an identifier which the Oauth Provider will be generate for you when you register.
    
- clientSecret
    
    Depending on the Oauth Provider, this can be generated for you when you register or you will have to generate one and use it at registration time      

## Retrieving access tokens


Once your application is connected you can request a new access token, by calling the `access` method of the Oauth Application API with the name of your provider:

```javascript
    const { dpapp } = this.props;    
    dpapp.oauth.access(provider).then(({ accessToken, refreshToken, expires, resourceOwnerId, ...rest }) => console.log({ accessToken, refreshToken, expires, resourceOwnerId, ...rest }));    
```

   
The actual values depend on the Oauth Provider, the only one that can be guaranteed is accessToken, the rest may or may not be available.
