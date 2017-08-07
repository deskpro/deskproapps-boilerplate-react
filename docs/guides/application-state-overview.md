# Application State Overview

In this section, you will learn more about the concepts related to application state, how to work with the `Application State API` and the various state related options
available in your `application manifest`, such as `state access patterns`.

## Security features

The application state component has been designed to exhibit the semantics of a simple key value with a couple of extra security features store that your application can use to persist its state between runs.

### State ownership

Each state variable has an owner, which is the user who creates the entry. This means that the user must be authenticated when the entry is created. Ownership is inferred automatically when
the state entry created and you can not explicitly specify it. Once assigned it can not be changed afterwards. 

### State permissions

Each state variable has a two permission settings, one for reading and one for writing. Each permission has to two levels:
 
 - `OWNER`
 
 This level means only the state's variable owner can read it or write it.
  
 - `EVERYBODY`
    
 This level means any user can read or write the state's variable, not only the owner.   
 
### State exposure
 
This is another security feature which prevents users from knowing the state variable's actual value. According to this setting, a state variable can be kept internal
and still available to users with the right permissions, but its actual value will never be exposed  through the REST API, thus making it hidden from users. The most common use-case for using this feature
is to securely store API keys that can be used when making REST calls via the http proxy 

## State entity

## Application context and state