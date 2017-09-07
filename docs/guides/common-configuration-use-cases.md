# Common configuration use cases

In this section:

- [Configure user-only storage](#configure-user-only-storage)
- [Configure application-wide storage](#configure-application-wide-storage)
- [Configure third-party API access](#configure-third-party-api-access)


## Configure user-only storage

Many times you will find that your application needs to store things like individual access tokens or other settings which should only
be accessed by one user only. A common use case is when your application is using Oauth to integrate with a third party and your app wants to store the user token for long term access.
  
In this case you would add the following access pattern to the `storage` list of patterns in `package.json`
  
```json
{
  "name": "your app name",
  "version": "0.1.0",
  "deskpro": {
    // other keys here...
    "storage": [
      // other keys here ...,
      {
        "name": "your storage variable name",
        "isBackendOnly": false,
        "permRead": "OWNER",
        "permWrite": "OWNER"
      }
    ]
  }
}
```
If you do not want this storage variable to be exposed to the world (equivalent with being read by the api), set the 
the `isBackendOnly` flag to `true`. A common scenario for having this setup is storing a user's access token for a third-party API and then access that API
through the `app.restApi.fetchCORS`. This will send your request through the http proxy bundled with our helpdesk which has the ability to read your application storage variables.


## Configure application-wide storage
  
To configure application-wide storage, at least one of `permRead` or `permWrite` must be set to `EVERYBODY`. A common scenario where your application would use
application-wide storage is to store application configuration that can be read by everybody but only changed by an admin. In this case you would configure your 
storage access pattern like this:

```json
{
  "name": "your app name",
  "version": "0.1.0",
  // other keys here ...
  "deskpro": {
    // other keys here...
    "storage": [
      // other keys here ...,
      {
        "name": "your storage variable name",
        "isBackendOnly": false,
        "permRead": "EVERYBOODY",
        "permWrite": "OWNER"
      }
    ]
  }
}
```

## Configure third-party API access

You can access third-party APIs using the local http proxy which comes with the DeskPRO apps API. There are a couple common reasons to configure third-party API access:
 
1. to access APIs which are **not CORS enabled**
2. your application uses personalized urls, which use secure storage variable which can not be made public

Regardless of your reasons to whitelist access to an API, you must add an url pattern to the `externalApis` list in your manifest entry. Your package json will look like this: 

```json
{
  "name": "your app name",
  "version": "0.1.0",
  // other keys here ...
  "deskpro": {
    // other keys here...
    "externalApis": [
      "your pattern here"
    ]
  }
}
```

The url access pattern can be:

1. a plain url

2. a valid javascript regular expression

    For example: `/^https?://([^.]+\\.)*mailchimp.com/?.*$/`, will match any path server by `mailchimp.com` as long as it is over http or https. You can use this example and replace mailchimp.com with your domain.
    
3. a url template, which would use storage variable names as placeholders:
    
    For instance suppose your application generates a unique user key which it uses as part of a url to fetch some user related information. 
    
    Then you would whitelist the following pattern: `https://{{my-user-secret-link}}.mydomain.com/`, where `my-user-secret-link` is the name of variable which stores the key value and can be read only by the authenticated user. 
