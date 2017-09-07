# Application Storage Overview

In this section, you will learn more about the concepts related to application storage, how to work with the `Application Storage API` and the various storage related options
available in your `application manifest`, such as `storage access patterns`.

## Security features

The application storage component has been designed to exhibit the semantics of a simple key value with a couple of extra security features store that your application can use to persist its storage between runs.

### Storage ownership

Each storage variable has an owner, which is the user who creates the entry. This means that the user must be authenticated when the entry is created. Ownership is inferred automatically when
the storage entry created and you can not explicitly specify it. Once assigned it can not be changed afterwards. 

### Storage permissions

Each storage variable has a two permission settings, one for reading and one for writing. Each permission has to two levels:
 
 - `OWNER`
 
 This level means only the storage's variable owner can read it or write it.
  
 - `EVERYBODY`
    
 This level means any user can read or write the storage's variable, not only the owner.
    
This feature is available as the `permRead` and `permWrite` properties of the `storage access pattern` you can define in your application manifest.    
    
 
### Storage exposure
 
This is another security feature which prevents users from knowing the storage variable's actual value. According to this setting, a storage variable can be kept internal
and still available to users with the right permissions, but its actual value will never be exposed  through the REST API, thus making it hidden from users. 

The most common use-case for using this feature is to securely store API keys that can be used when making REST calls via the http proxy.
 
This feature is available as the `isBackendOnly` property of the `storage access pattern` you can define in your application manifest.

## Context features

Application storage is never created in isolation, it must always be created in relationship with an existing DeskPRO business object (such as tickets or organizations) and this is because storage is always used to describe that particular object.
These business objects are made available through your application's context at runtime which is determined by the `Application Target Definition` list from your application manifest


Your application will target one or more of these business objects which will be made available through the application context at runtime.

### Storage entity

The storage entity represents the object which a particular storage variable describes. You must set this property when you are reading or writing to storage.
This property is a string and takes the form `<object type>:<object id>`, where `<object type>` is the resource name (in singular) of one of DeskPRO objects type exposed via the API
and `<object id>` is that object's id.

For example, if you want to persist some storage value which is connected to a certain ticket with `id 23`, you would set this property to:
```
    ticket:23
```

To see the a list of resource names, you can go to [DeskPRO's API page](https://support.deskpro.com/api/api.html). There you can see the available
resources (names are in plural, so ticket is listed as tickets).


For any storage value that refers to your application, such as application settings, you can use the object type `app`.

The application API abstracts most of the need to specify this property through the following methods:

 - `dpapp.storage.getAppStorage()` and `dpapp.storage.setAppStorage()`
 
These methods deal with the storage values associated with your application 
 
 - `dpapp.storage.getEntityStorage()` and `dpapp.storage.setEntityStorage()`

These methods deal with the storage values associated with the main DeskPRO business object in your application's context.  

Example retrieving a storage value.

```js
const { dpapp } = this.props;

dpapp.storage.getEntityStorage('cards')
  .then(cards => this.setState({ cards }))
  .catch((error) => {
    console.error(error);
  });
```

Example setting a storage value.

```js
const { dpapp } = this.props;
const { cards } = this.state;

dpapp.storage.setEntityStorage('cards', cards)
 .then(() => {
  console.log('Cards have been saved.');
 })
 .catch((error) => {
  console.error(error);
 });
```